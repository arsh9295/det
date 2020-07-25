from django import forms
from . import models


class DetForm(forms.ModelForm):
    class Meta:
        model = models.DetUsers
        fields = ['fname', 'lname', 'useremail', 'userpass']
