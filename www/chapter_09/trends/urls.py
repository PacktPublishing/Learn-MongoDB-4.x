from django.urls import path

from . import views

urlpatterns = [
    path('future/', views.future, name='trends.future'),
    path('future/json/', views.futureJson, name='trends.future_json'),
]
