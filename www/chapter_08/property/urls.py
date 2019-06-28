from django.urls import path

from . import views

urlpatterns = [
    path('list/<slug:prop_key>/', views.listProp, name='property_list'),
    path('edit/', views.addEdit, name='property_edit_new'),
    path('edit/<slug:prop_key>/', views.addEdit, name='property_edit'),
    path('delete/', views.delProperty, name='property_delete'),
    path('contact/update/', views.updateContact, name='property_update_contact'),
    path('json/by_part/<slug:part_key>/', views.autoPopPropByPartKey, name='property_json_props_by_part_key'),
    path('json/rooms/<slug:prop_key>/', views.autoPopRoomsByPropKey, name='property_json_rooms_by_prop_key'),
    path('json/update_contact/<slug:prop_key>/', views.autoPopContactUpdate,  name='property_json_update_contact'),
    path('room/add/<slug:prop_key>/', views.addRoom, name='property_add_room'),
]
