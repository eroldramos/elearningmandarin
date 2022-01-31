from django.forms import ModelForm
from .models import  User
from django.contrib.auth.forms import UserCreationForm

class MyUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2']
              
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs.update({'class': 'form-control','placeholder':'Enter first name'})
        self.fields['last_name'].widget.attrs.update({'class': 'form-control','placeholder':'Enter last name'})
        self.fields['username'].widget.attrs.update({'class': 'form-control','placeholder':'Enter username'})
        self.fields['email'].widget.attrs.update({'class': 'form-control','placeholder':'Enter email'})
        self.fields['password1'].widget.attrs.update({'class': 'form-control','placeholder':'Enter password'})
        self.fields['password2'].widget.attrs.update({'class': 'form-control','placeholder':'Confirm password'})
 
class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ['avatar', 'first_name','last_name','username',  'email',]
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['avatar'].widget.attrs.update({'class': 'form-control'})
        self.fields['first_name'].widget.attrs.update({'class': 'form-control','placeholder':'Enter first name'})
        self.fields['last_name'].widget.attrs.update({'class': 'form-control','placeholder':'Enter last name'})
        self.fields['username'].widget.attrs.update({'class': 'form-control','placeholder':'Enter username'})
        self.fields['email'].widget.attrs.update({'class': 'form-control','placeholder':'Enter email'})
