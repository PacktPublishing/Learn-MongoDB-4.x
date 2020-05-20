from django.http import HttpResponse, HttpResponseRedirect
from django.template.loader import render_to_string
from .forms import FormService, PropertyForm, NameForm, PropInfoForm, LocationForm, ContactForm, RoomTypeForm, ChoosePartnerForm

# tell python where to find module source code
import os,sys
#sys.path.append(os.path.realpath("../../../chapters/09/src"))
from config.config import Config
from booksomeplace.entity.base import Base, Name, Location, Contact
from booksomeplace.entity.property import Property, PropInfo, RoomType
from booksomeplace.domain.property import PropertyService
from booksomeplace.domain.partner import PartnerService

def addEdit(request, prop_key = None) :

    # get property key param
    prop_name = 'NEW'
    add_or_edit = 'ADD'

    # retrieve property and form services
    mainConfig  = Config()
    propService = PropertyService(mainConfig)
    formSvc     = FormService()
    message     = 'Please enter appropriate form data'

    # check to see if a valid property key was passed as a parameter
    if prop_key :
        # lookup property and grab name
        prop = propService.fetchByKey(prop_key)
        if prop :
            prop_name = prop.get('propName')
            add_or_edit = 'EDIT'
            formSvc.hydrateFormsFromEntity(prop)

    # if this is a POST request process the form data
    if request.method == 'POST':
        # hydrate forms from post data
        formSvc.hydrateFormsFromPost(request.POST)
        # validate post data
        if formSvc.validateForms() :
            # use PropertyService to save Property
            prop = formSvc.getPropertyFromForms()
            if add_or_edit == 'ADD' :
                if propService.save(prop) :
                    # if successful, start adding rooms
                    message = 'Property added successfully!'
                    return HttpResponseRedirect('/property/room/add/' + prop.getKey())
                else :
                    message = 'Sorry! Unable to save form data.'
            else :
                if propService.edit(prop) :
                    message = 'Property updated successfully!'
                    return HttpResponseRedirect('/property/list/' + prop.getKey())
                else :
                    message = 'Sorry! Unable to save form data.'
        else :
            message = 'Sorry! Unable to validate this form.'

    # build master form
    context = { 'message' : message, 'prop_name' : prop_name }
    for key, sub_form in formSvc.forms.items() :
        context.update( { key + '_form_html' : render_to_string('property_' + key + '.html', {'form': sub_form}) } )
    prop_master = render_to_string('property.html', context)

    # embed form in layout
    page = render_to_string('layout.html', {'contents' : prop_master})
    return HttpResponse(page)

"""
Lists a single property
@return booksomeplace.entity.property.Property instance
"""
def listProp(request, prop_key = None) :
    propSvc = PropertyService(Config())
    prop    = Property()
    rooms   = []
    message = ''
    if prop_key :
        prop = propSvc.fetchByKey(prop_key)
    # build master form
    info = prop.get('propInfo')
    context = {
        'message'   : message,
        'prop_name' : prop.get('propName'),
        'prop_type' : info.get('type'),
        'prop_des'  : info.get('description'),
        'prop_key'  : prop_key,
    }
    prop_master = render_to_string('property_list.html', context)
    # embed form in layout
    page = render_to_string('layout.html', {'contents' : prop_master})
    return HttpResponse(page)


"""
Returns a JSON list of rooms by property key
"""
def autoPopRoomsByPropKey(request, prop_key = None) :
    import json
    config  = Config()
    propSvc = PropertyService(config)
    result  = []
    if prop_key :
        temp = propSvc.fetchRoomsByPropertyKey(prop_key)
        if temp :
            # reformat for jQuery datatables
            for rooms in temp :
                # process beds
                beds = ''
                for val in rooms['beds'] :
                    beds += val + ', '
                beds = beds[0:-2]
                room_config = config.getConfig('rooms')
                link = '<a target="_blank" href="' + room_config['details_url'] + rooms['roomTypeKey'] + '/">Details</a>'
                result.append({'type':rooms['type'], 'view':rooms['view'],'beds':beds,'available':rooms['numAvailable'],'link':link})
    return HttpResponse(json.dumps(result), content_type='application/json')

"""
Returns a JSON list of properties by partner key
"""
def autoPopPropByPartKey(request, part_key = None) :
    import json
    propSvc = PropertyService(Config())
    result  = []
    if part_key :
        result = propSvc.fetchByPartnerKey(part_key)
    return HttpResponse(json.dumps(result), content_type='application/json')

"""
Returns property contact name and information
"""
def autoPopContactUpdate(request, prop_key = None) :
    import json
    propSvc = PropertyService(Config())
    result  = []
    if prop_key :
        result = propSvc.fetchContactInfoByKey(prop_key)
    return HttpResponse(json.dumps(result), content_type='application/json')

"""
Updates property contact name and information
"""
def updateContact(request) :

    # retrieve form and property services
    formSvc = FormService()
    message = ''
    config  = Config()
    partSvc = PartnerService(config)
    propSvc = PropertyService(config)

    # number of validation checks to be performed
    check   = 4

    # if this is a POST request process the form data
    if request.method == 'POST' :

        # hydrate subforms from post data
        formSvc.hydrateFormsFromPost(request.POST)
        name_form    = formSvc.getForm('name')
        contact_form = formSvc.getForm('contact')

        # validate partner key
        if 'prop_partnerKey' in request.POST :
            partKey = request.POST['prop_partnerKey']
            part = partSvc.fetchByKey(partKey)
            if part :
                check -= 1
            else :
                message += '<br>Unable to confirm this partner.'
        else :
            message += '<br>You need to choose a partner.'

        # validate property key
        if 'prop_propertyKey' in request.POST :
            propKey = request.POST['prop_propertyKey']
            prop = propSvc.fetchByKey(propKey)
            if prop :
                check -= 1
            else :
                message += '<br>Unable to confirm this property.'
        else :
            message += '<br>You need to choose a property.'

        # validate form data
        if name_form.is_valid() : check -= 1
        if contact_form.is_valid() : check -= 1

        # proceed if all validation checks are successful
        if check == 0 :
            # extract name and contact information from subforms
            prop.set('contactName', Name(formSvc.getCleanDataByKey('name')))
            prop.set('contactInfo', Contact(formSvc.getCleanDataByKey('contact')))
            # use PropertyService to update Property
            if propSvc.edit(prop) :
                message += '<br>Property contact information updated successfully!'
                return HttpResponseRedirect('/property/list/' + prop.getKey())
            else :
                message += '<br>Unable to update form data.'
        else :
            message += '<br>Unable to validate this form.'

    # build master form
    context = {
        'message' : message,
        'choose_part_form' : ChoosePartnerForm(),
        'name_form_html' : render_to_string('property_name.html', {'form': formSvc.getForm('name')}),
        'contact_form_html' : render_to_string('property_contact.html', {'form': formSvc.getForm('contact')})
    }
    prop_master = render_to_string('property_update_contact.html', context)
    # embed form in layout
    page = render_to_string('layout.html', {'contents' : prop_master})
    return HttpResponse(page)

def addRoom(request, prop_key = None):
    # get property key param
    formSvc    = FormService()
    error_flag = True
    prop_name  = 'Unknown'
    message    = 'Please enter room information'
    propService = PropertyService(Config())
    if prop_key :
        # lookup property and grab name
        prop = propService.fetchByKey(prop_key)
        if prop :
            prop_name = prop.get('propName')
            error_flag = False
        else :
            message = 'ERROR: property unknown: unable to add rooms'
    else :
        message = 'ERROR: property unknown: unable to add rooms'

    # build room form
    room_form = RoomTypeForm()
    # if this is a POST request process the form data
    if request.method == 'POST' and not error_flag :
        # check to see if done
        if 'done' in request.POST :
            return HttpResponseRedirect('/property/list/' + prop.getKey())
        # hydrate forms from post data
        room_form = RoomTypeForm(request.POST)
        # validate post data
        if room_form.is_valid() :
            # create RoomType object from clean form data
            start = len('room_type_')
            cleanData = {}
            for formField, value in room_form.cleaned_data.items() :
                docField = formField[start:]
                cleanData.update({docField : value})
            # use PropertyService to save Property
            if propService.saveRoom(RoomType(cleanData), prop_key) :
                # redirect to a new URL:
                message = 'Added room successfully'
            else :
                message = 'Sorry! Unable to save form data.'
        else :
            message = 'Sorry! Unable to validate this form.'

    # build room form
    room_form_html = render_to_string('property_room_type.html', {
        'form' : room_form,
        'message' : message,
        'prop_key' : prop_key,
        'prop_name' : prop_name,
        'error_flag' : error_flag
    })
    # embed form in layout
    page = render_to_string('layout.html', {'contents' : room_form_html})
    return HttpResponse(page)

"""
URL: /property/edit/success/<prop_key>/
Grabs URL param "prop_key"
"""
def editSuccess(request, prop_key = None):
    # get property key param
    prop_name = 'Unknown'
    if prop_key :
        # lookup property and grab name
        mainConfig = Config()
        propService = PropertyService(mainConfig)
        prop = propService.fetchByKey(prop_key)
        if prop :
            prop_name = prop.get('propName')
    # render content page
    prop_success = render_to_string('property_new_success.html', {'prop_name' : prop_name, 'prop_key' : prop_key})
    # embed page in layout
    page = render_to_string('layout.html', {'contents' : prop_success})
    return HttpResponse(page)

"""
Deletes a property
"""
def delProperty(request) :

    # initialize vars
    propSvc  = PropertyService(Config())
    prop     = Property()
    rooms    = []
    message  = ''
    confirm  = False
    prop_key = ''

    # check for delete confirmation
    if request.method == 'POST' :
        # first check to see if property key was chosen
        if 'prop_propertyKey' in request.POST :
            prop_key = request.POST['prop_propertyKey']
            prop = propSvc.fetchByKey(prop_key)
            if prop :
                confirm = True
                message = 'Confirm property to delete'
        # else check to see if property key + delete confirm
        if 'del_confirm_yes' in request.POST and 'prop_key' in request.POST :
            prop_key = request.POST['prop_key']
            prop = propSvc.fetchByKey(prop_key)
            # proceed with delete
            if prop :
                if propSvc.deleteByKey(prop_key) :
                    message = 'Property ' + prop.get('propName') + ' was successfully deleted'
                else :
                    message = 'Unable to delete property ' + prop.get('propName')
            else :
                message = 'Unable to delete property ' + prop.get('propName')

    # build master form
    info = prop.get('propInfo')
    context = {
        'choose_part_form' : ChoosePartnerForm(),
        'message'   : message,
        'prop_name' : prop.get('propName'),
        'prop_type' : info.get('type'),
        'prop_des'  : info.get('description'),
        'prop_key'  : prop_key,
        'confirm'   : confirm,
    }
    # embed form in layout
    prop_master = render_to_string('property_list_del.html', context)
    page = render_to_string('layout.html', {'contents' : prop_master})
    return HttpResponse(page)

