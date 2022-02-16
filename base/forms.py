from django.forms import ModelForm
from .models import  User, DictionaryList, SpeechList, Lesson
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
        self.fields['first_name'].widget.attrs['required'] = 'required'
        self.fields['last_name'].widget.attrs['required'] = 'required'
        self.fields['username'].widget.attrs['required'] = 'required'
        self.fields['email'].widget.attrs['required'] = 'required'
class DictionaryListForm(ModelForm):
    class Meta:
        model = DictionaryList
        fields = ['hanzi', 'pinyin', 'english', 'part_of_speech', 'definition', 'sentence', 'translation']
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)   
        self.fields['hanzi'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Hanzi'})
        self.fields['pinyin'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Pinyin'})
        self.fields['english'].widget.attrs.update({'class': 'form-control', 'placeholder': 'English'})
        self.fields['part_of_speech'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Part of speech'})
        self.fields['definition'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Definition'})
        self.fields['sentence'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Example in a sentence'})
        self.fields['translation'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Translation of the sentence'})

class LessonForm(ModelForm):
    class Meta:
        model = Lesson
        fields = ['title', 'description', 'hsklevel', 'content']
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)   
        self.fields['title'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Title'})
        self.fields['description'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Description'})
        self.fields['hsklevel'].widget.attrs.update({'class': 'form-control', 'placeholder': 'HSK Level'})
        self.fields['content'].widget.attrs.update({'class': 'form-control', 'placeholder': 'Content',  'id':'myTextArea'})
      