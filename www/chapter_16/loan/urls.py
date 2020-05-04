from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='loan'),
    path('main/', views.index, name='loan.main'),
    path('accept/', views.accept, name='loan.accept'),
]
