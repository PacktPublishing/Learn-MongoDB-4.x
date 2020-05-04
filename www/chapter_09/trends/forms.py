from django import forms
from django.core import validators
from django.core.validators import RegexValidator

"""
Request user input on key fields representing property location
"""
class TrendForm(forms.Form) :

    # define fields
    trend_city     = forms.CharField(label='City',required=False)
    trend_region   = forms.CharField(label='Region',required=False)
    trend_locality = forms.CharField(label='Locality',required=False)
    trend_country  = forms.CharField(label='Country',required=False,widget=forms.TextInput(attrs={'size':'2','maxlength':'2'}))
    trend_factor   = forms.DecimalField(label='Factor',required=False,initial=.10,widget=forms.NumberInput(attrs={'step':.01}))
