from django import forms
from django.core import validators
from django.core.validators import RegexValidator, EmailValidator

# tell python where to find module source code
import os,sys
#sys.path.append(os.path.realpath("../../../chapters/08/src"))
from config.config import Config
from booksomeplace.entity.base import Name, Location, Contact
from booksomeplace.entity.property import Property, PropInfo, RoomType
from booksomeplace.domain.partner import PartnerService
from booksomeplace.domain.property import PropertyService
from booksomeplace.domain.common import CommonService

"""
Name = {
    "title"    : <formal titles, e.g. Mr, Ms, Dr, etc.>,
    "first"    : <first name, also referred to as "given" name>,
    "middle"   : <middle name, optional>,
    "last"     : <last name, also referred to as "surname" or "family name">,
    "suffix"   : <any additional name information included after the last name>
}
"""
class NameForm(forms.Form) :
    # pull list of titles from common
    config    = Config()
    commonSvc = CommonService(config)
    titles    = [(item, item) for item in commonSvc.fetchByKey('title')]
    # define form fields
    alphaOnly   = RegexValidator(r'^[a-zA-Z]*$', 'Only letters are allowed.')
    name_title  = forms.ChoiceField(label='Title',choices=titles)
    name_first  = forms.CharField(label='First Name',validators=[alphaOnly])
    name_middle = forms.CharField(label='M.I.',required=False)
    name_last   = forms.CharField(label='Last Name',validators=[alphaOnly])
    name_suffix = forms.CharField(label='Suffix',required=False)

"""
PropInfo = {
    "type"        : <propertyType>,
    "chain"       : <chain>,
    "photos"      : <stored using GridFS>,
    "facilities"  : [<facilityType>,<facilityType>,etc.],
    "description" : <string>,
    "currency"    : <currencyType>,
    "taxFee"      : <float>
}
"""
class PropInfoForm(forms.Form) :
    # pull list of types from common
    config    = Config()
    commonSvc = CommonService(config)
    facTypes  = [(item, '... ' + item) for item in commonSvc.fetchByKey('facilityType')]
    propTypes = [(item, item) for item in commonSvc.fetchByKey('propertyType')]
    currTypes = [(item, item) for item in commonSvc.fetchByKey('currency')]
    # define validator
    alnumPunc = RegexValidator(r'^[\w\.\-\,\"\' ]+$',
                              'Only letters, numbers, spaces, quotes, commas and periods are allowed.')
    # define fields
    info_type       = forms.ChoiceField(label='Property Type',choices=propTypes)
    info_chain      = forms.CharField(label='Chain',validators=[validators.validate_slug],required=False)
    info_photos     = forms.URLField(label='Photo URL',required=False)
    info_facilities = forms.MultipleChoiceField(label='Facilities',choices=facTypes,
                                                widget=forms.CheckboxSelectMultiple(attrs={'class': 'check_horizontal'}))
    info_other_fac  = forms.CharField(label='Other Facilities',required=False)
    info_currency   = forms.ChoiceField(label='Currency',choices=currTypes)
    info_taxFee     = forms.FloatField(label='Taxes/Fees')
    info_description= forms.CharField(label='Description',validators=[alnumPunc],
                                      widget=forms.Textarea(attrs={'rows' : 4, 'cols' : 80}))

"""
Location = {
    "streetAddress"   : <number and name of street>,
    "buildingName"    : <name of building>,
    "floor"           : <number of name of the floor>,
    "roomAptCondoFlat": <room/apt/condo/flat number>,
    "city"            : <city name>,
    "stateProvince"   : <state or province>,
    "locality"        : <other local identifying information>,
    "country"         : <ISO2 country code>,
    "postalCode"      : <postal code>,
    "latitude"        : <latitude>,
    "longitude"       : <longitude>
}
"""
class LocationForm(forms.Form) :
    # define validator
    iso2 = RegexValidator(r'^[A-Z]{2}$', 'Country code must be a valid ISO2 code (2 letters UPPERCASE).')
    # define fields
    location_streetAddress    = forms.CharField(label ='Street Address')
    location_buildingName     = forms.CharField(label ='Building Name',required=False)
    location_floor            = forms.CharField(label ='Floor',required=False)
    location_roomAptCondoFlat = forms.CharField(label ='Room/Condo',required=False)
    location_city             = forms.CharField(label ='City')
    location_stateProvince    = forms.CharField(label ='State/Province')
    location_locality         = forms.CharField(label ='Locality',required=False)
    location_country          = forms.CharField(label ='Country',validators=[iso2])
    location_postalCode       = forms.CharField(label ='Postal Code')
    location_latitude         = forms.CharField(label ='Latitude')
    location_longitude        = forms.CharField(label ='Longitude')

"""
Contact = {
    "email"    : <primary email address>,
    "phone"    : <primary phone number>,
    "socMedia" : <preferred social media contact>,
}
"""
class ContactForm(forms.Form) :
    # pull list of types from common
    config    = Config()
    commonSvc = CommonService(config)
    socTypes  = [(item, item) for item in commonSvc.fetchByKey('socMediaType')]
    # define validator
    validEmail = EmailValidator(message="Must be a valid email address")
    # define fields
    contact_email    = forms.EmailField(label ='Email',validators=[validEmail])
    contact_phone    = forms.CharField(label='Phone')
    contact_soc_type = forms.ChoiceField(label='Social Media',choices=socTypes,required=False)
    contact_soc_addr = forms.CharField(label='Social Media Identity',required=False)

"""
RoomType = {
    "roomTypeKey"  : <string>,
    "type"         : <roomType>,
    "view"         : <string>,
    "description"  : <string>,
    "beds"         : [<bedType>,<bedType>,etc.],
    "numAvailable" : <int>,
    "numBooked"    : <int>,
    "price"        : <float>
}
"""
class RoomTypeForm(forms.Form) :
    # pull list of types from common
    config    = Config()
    commonSvc = CommonService(config)
    roomTypes = [(item, item) for item in commonSvc.fetchByKey('roomType')]
    bedTypes  = [(item, item) for item in commonSvc.fetchByKey('bedType')]
    # define validator
    alnumPunc = RegexValidator(r'^[\w\.\-\,\"\' ]+$',
                              'Only letters, numbers, spaces, quotes, commas and periods are allowed.')
    # define fields
    room_type_type         = forms.ChoiceField(label='Room Type',choices=roomTypes)
    room_type_view         = forms.CharField(label='View',validators=[alnumPunc])
    room_type_description  = forms.CharField(label='Description',
                                             widget=forms.Textarea(attrs={'rows' : 2, 'cols' : 40}),
                                             validators=[alnumPunc])
    room_type_beds         = forms.MultipleChoiceField(label='Bed Types',choices=bedTypes,
                                               widget=forms.CheckboxSelectMultiple(attrs={'class':'check_horizontal'}))
    room_type_numAvailable = forms.IntegerField(label='How Many?')
    room_type_price        = forms.FloatField(label='Price (USD)')

"""
Property = {
    "propertyKey" : <string>,
    "partnerKey"  : <string>,
    "propName"    : <name of this property>,
    "propInfo"    : <PropInfo>,
    "address"     : <Location>,
    "contactName" : <Name>,
    "contactInfo" : <Contact>,
    "rooms"       : [<RoomType>,<RoomType>,etc.],
    "reviews"     : [<Review>,<Review>,etc.],
    "rating"      : <int>,
    "totalBooked" : <int>
}
"""
class PropertyForm(forms.Form) :
    config      = Config()
    partSvc     = PartnerService(config)
    partKeys    = partSvc.fetchPartnerKeys()
    # define validator
    alnumPunc = RegexValidator(r'^[\w\.\-\,\"\' ]+$',
                              'Only letters, numbers, spaces, quotes, commas and periods are allowed.')
    # define fields
    prop_partnerKey = forms.ChoiceField(label='Partner',choices=partKeys)
    prop_propName   = forms.CharField(label='Property Name',validators=[alnumPunc])

"""
Choose the partner you want to work with
"""
class ChoosePartnerForm(forms.Form) :
    partSvc     = PartnerService(Config())
    partKeys    = partSvc.fetchPartnerKeys()
    # define validator
    alnumPunc = RegexValidator(r'^[\w\.\-\,\"\' ]+$',
                              'Only letters, numbers, spaces, quotes, commas and periods are allowed.')
    # define fields
    prop_partnerKey = forms.ChoiceField(label='Partner',choices=partKeys)

class FormService() :

    forms = {}
    list_fields = ['info_facilities','room_type_beds']

    def __init__(self) :
        self.forms.update({ 'prop' : PropertyForm() })
        self.forms.update({ 'name' : NameForm() })
        self.forms.update({ 'info' : PropInfoForm() })
        self.forms.update({ 'contact' : ContactForm() })
        self.forms.update({ 'location' : LocationForm() })

    def getForm(self, key) :
        if key in self.forms :
            return self.forms[key]
        else :
            return None

    """
    Hydrates form from POST data
    @param dict request.POST
    """
    def hydrateFormsFromPost(self, data) :
        self.forms['prop'] = PropertyForm(self.getDataByKey('prop', data))
        self.forms['name'] = NameForm(self.getDataByKey('name', data))
        self.forms['info'] = PropInfoForm(self.getDataByKey('info', data))
        self.forms['contact'] = ContactForm(self.getDataByKey('contact', data))
        self.forms['location'] = LocationForm(self.getDataByKey('location', data))

    """
    Filters request.POST data so that only form fields with the prefix are returned
    @param string key == form key
    @param dict request.POST
    @return dict formData
    """
    def getDataByKey(self, key, data) :
        prefix = key + '_'
        formData = {}
        for field, value in data.items() :
            if field[0:len(prefix)] == prefix :
                if field in self.list_fields :
                    value = data.getlist(field)
                formData.update({field : value})
        return formData

    """
    Hydrates subforms from Property instance
    @param booksomeplace.entity.property.Property
    """
    def hydrateFormsFromEntity(self, prop) :
        # hydrate Property form
        formData = {}
        formData.update({'prop_partnerKey' : prop.get('partnerKey')})
        formData.update({'prop_propName'   : prop.get('propName')})
        self.forms['prop'] = PropertyForm(formData)
        # hydrate NameForm
        formData = {}
        subclass = prop.get('contactName')
        for field, value in subclass.items() :
            formData.update({'name_' + field : value})
        self.forms['name'] = NameForm(formData)
        # hydrate PropInfoForm
        formData = {}
        subclass = prop.get('propInfo')
        for field, value in subclass.items() :
            formData.update({'info_' + field : value})
        self.forms['info'] = PropInfoForm(formData)
        # hydrate ContactForm
        formData = {}
        subclass = prop.get('contactInfo')
        for field, value in subclass.items() :
            formData.update({'contact_' + field : value})
        self.forms['contact'] = ContactForm(formData)
        # hydrate LocationForm
        formData = {}
        subclass = prop.get('address')
        for field, value in subclass.items() :
            formData.update({'location_' + field : value})
        self.forms['location'] = LocationForm(formData)

    """
    Validates forms
    @return boolean valid True | False
    """
    def validateForms(self) :
        count = 0
        valid = 0
        for key, sub_form in self.forms.items() :
            count += 1
            if sub_form.is_valid() : valid += 1
        return count == valid

    """
    Maps form field to entity field
    @param string key == form key
    @return dict cleanData
    """
    def getCleanDataByKey(self, key) :
        prefix    = key + '_'
        start     = len(prefix)
        cleanData = {}
        for formField, value in self.forms[key].cleaned_data.items() :
            docField = formField[start:]
            cleanData.update({docField : value})
        return cleanData

    """
    Product Property instance from clean form data
    @return booksomeplace.entity.property.Property instance
    """
    def getPropertyFromForms(self) :
        # get property form
        prop_form = self.forms['prop']
        # create data dictionary
        data = {
            'partnerKey'  : prop_form.cleaned_data.get('prop_partnerKey'),
            'propName'    : prop_form.cleaned_data.get('prop_propName'),
            'propInfo'    : PropInfo(self.getCleanDataByKey('info')),
            'address'     : Location(self.getCleanDataByKey('location')),
            'contactName' : Name(self.getCleanDataByKey('name')),
            'contactInfo' : Contact(self.getCleanDataByKey('contact')),
        }
        # create and return Property instance
        return Property(data)

    def logStuff(self, label, item) :
        import os
        import pprint
        from datetime import date
        today = date.today()
        fn = os.path.realpath('/home/jed/Repos/learn-mongodb/www/data') + '/info.log'
        fh = open(fn, 'a')
        fh.write(today.strftime('%Y-%m-%d %H:%M:%S') + ':' + label + "\n")
        fh.write(pprint.pformat(item) + "\n")
        fh.close()
        return True
