from django.contrib import admin

# Register your models here.
from .models import User, DictionaryList, SpeechList, HskLevel, Lesson, Quiz, Result
admin.site.register(User)
admin.site.register(DictionaryList)
admin.site.register(SpeechList)
admin.site.register(HskLevel)
admin.site.register(Lesson)
admin.site.register(Quiz)
admin.site.register(Result)

