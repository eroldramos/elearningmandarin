from django.db import models
from django.contrib.auth.models import AbstractUser
import random
# Create your models here.

class User(AbstractUser):
    fname = models.CharField(max_length=200, null=True)
    lname = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique = True, null=True)
    bio = models.TextField(null=True)
    avatar = models.ImageField(null=True, default="avatar.svg")

    REQUIRED_FIELDS = []
    class Meta:
        ordering = ['username']

class SpeechList(models.Model):
    speech = models.CharField(max_length=200)
    def __str__(self):
        return self.speech

class DictionaryList(models.Model):
    hanzi = models.CharField(max_length=200, null=True)
    pinyin = models.CharField(max_length=200, null=True)
    english = models.CharField(max_length=200, null=True)
    part_of_speech = models.ForeignKey(SpeechList, on_delete=models.SET_NULL, null=True)
    definition = models.TextField(null=True, blank=True)
    sentence = models.CharField(max_length=200, null=True)
    translation = models.CharField(max_length=200, null=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.pinyin
    class Meta:
        ordering = ['-updated', '-created']

class HskLevel(models.Model):
    level = models.CharField(max_length=200)
    def __str__(self):
        return self.level
    class Meta:
        ordering = ['level']

class Lesson(models.Model):
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True, blank=True)
    hsklevel = models.ForeignKey(HskLevel, on_delete=models.SET_NULL, null=True, verbose_name = "HSK Level")
    content = models.TextField(null=True, blank=True)
    is_publish = models.BooleanField(default=False, verbose_name="Publish")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} -- {self.hsklevel}"
    class Meta:
        ordering = ['-updated', '-created']

class Quiz(models.Model):
    lesson = models.OneToOneField(Lesson, on_delete=models.CASCADE)
    title = models.CharField(max_length=120, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    questions = models.TextField(null=True, blank=True)
    time = models.IntegerField(help_text="duration of the quiz in minutes", default=0)
    passingScore = models.IntegerField(help_text="required score in %", default=0)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.lesson.title
    class Meta:
        verbose_name_plural = 'Quizzes'

class Result(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()

    def __str__(self):
        return str(self.user.username)

