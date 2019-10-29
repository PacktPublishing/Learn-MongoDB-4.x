from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='maintenance.index'),
    path('totals/', views.totals, name='maintenance.totals'),
    path('past_due/', views.past_due, name='maintenance.past_due'),
    path('payments/', views.payments, name='maintenance.payments'),
]
