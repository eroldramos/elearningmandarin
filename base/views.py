from django.shortcuts import render, redirect
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from .models import  User, DictionaryList, SpeechList, HskLevel, Lesson, Quiz, Result
from .forms import MyUserCreationForm, UserForm, DictionaryListForm, LessonForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password
from difflib import SequenceMatcher
from django.core.paginator import Paginator
import json
# Create your views here.


@login_required(login_url='anonymous')
def UpdateUserPage(request):
    page = 'authenticated'
    user = request.user
    form = UserForm(instance=user)
    if request.method == 'POST':
        form = UserForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            form.save()
            messages.success(request, "Account updated!")
            return redirect('update-user')
        else :
            for field, errors in form.errors.items():
                messages.error(request, '{}'.format(''.join(errors)))
            return redirect('update-user')
    context = {
        'form': form,
        'page' : page,
       
    }
    return render(request, 'update_user.html', context)


def RegisterPage(request):
    form = MyUserCreationForm()
    formErrors = 0
    if request.user.is_authenticated:
        messages.info(request, 'You are already logged in')
        return redirect('dictionary')

    if request.method == 'POST':
        s_1 = request.POST.get('username')
        s_2 = request.POST.get('password1')
        ratio = SequenceMatcher(a=s_1,b=s_2).ratio()
        s_3 = request.POST.get('email')
        ratio2 = SequenceMatcher(a=s_3,b=s_2).ratio()

        if ratio >= 0.6 and ratio <= 1 or ratio2 >= 0.6 and ratio2 <= 1:
            messages.error(request, 'Password can’t be too similar to your other personal information.')
            formErrors += 1
        
        if request.POST.get('password1') != request.POST.get('password2'):
            messages.error(request, 'Password do not matched!')
            formErrors += 1
        if len(request.POST.get('password1')) < 8:
            messages.error(request, 'Password must be at least 8 characters')
            formErrors += 1
        if str(request.POST.get('password1')).isnumeric() or str(request.POST.get('password1')).isalpha():
            messages.error(request, 'Password must be composed of alphanumeric characters')
            formErrors += 1
        if User.objects.filter(username=request.POST.get('username')).exists():
            messages.error(request, f"{request.POST.get('username')} already exists!")
            formErrors += 1
        if User.objects.filter(email=request.POST.get('email')).exists():
            messages.error(request, f"{request.POST.get('email')} already exists!")
            formErrors += 1
        
        if formErrors == 0:
            form = MyUserCreationForm(request.POST)
            if form.is_valid():
                user = form.save(commit=False)
                user.username = user.username.lower()
                user.save()
                login(request, user)
                messages.success(request, f'You are logged in as {user.username}')
                return redirect('dictionary')
            else:
                messages.warning(request, 'An error suddenly occured!')
                return redirect('register')
        else:
            return redirect('register')
    context = {
        'form': form,

    }
    return render(request, 'register.html', context)

def LoginPage(request):

    if request.user.is_authenticated:
        messages.info(request, 'You are already logged in')
        return redirect('dictionary')

    if request.method == 'POST':
        username = request.POST.get('username').lower()
        password = request.POST.get('password')
        formErrors = 0

        if "@" in username:
            try:
                user = User.objects.get(email = username)
                username = user.username 
            except:
                formErrors += 1
                messages.error(request, f'{username} does not exist')
                return redirect('login')
        else:
            try:
                user = User.objects.get(username = username)
            except:
                formErrors += 1
                messages.error(request, f'{username} does not exist')
                return redirect('login')
        
        if formErrors == 0:
            user = authenticate(request, username = username, password=password)
            if user is not None:
                if user.is_staff:
                    login(request, user)
                    messages.success(request, f'You are logged in as {username}')
                    return redirect('lessons')
                else:
                    login(request, user)
                    messages.success(request, f'You are logged in as {username}')
                    return redirect('dictionary')
            else:
                messages.warning(request, 'Invalid credentials!')
                return redirect('login')

    context = {
        'page' : 'login'

    }
    return render(request, 'login.html', context)
    
@login_required(login_url='anonymous')
def PasswordReset(request):
    if request.method == 'POST':
        user = request.user
        oldpassword = request.POST.get('oldpassword')
        newpassword = request.POST.get('newpassword')
        confirmpassword = request.POST.get('confirmpassword')
        
        formErrors = 0
        s_1 = user.username
        s_2 = newpassword
        ratio = SequenceMatcher(a=s_1,b=s_2).ratio()
        s_3 = user.email
        ratio2 = SequenceMatcher(a=s_3,b=s_2).ratio()

        if ratio >= 0.6 and ratio <= 1 or ratio2 >= 0.6 and ratio2 <= 1:
            messages.error(request, 'Password can’t be too similar to your other personal information.')
            formErrors += 1
        if newpassword != confirmpassword:
            messages.error(request, 'Password do not match')
            formErrors += 1
        if str(newpassword).isalpha() or str(newpassword).isnumeric():
            messages.error(request, 'Password must be composed of alphanumeric characters')
            formErrors += 1
        if len(newpassword) < 8:
            messages.error(request, 'Password must be at least 8 characters')
            formErrors += 1
        user = authenticate(request, username = user.username, password= oldpassword)
        if user is None: 
            messages.warning(request, 'old password is incorrect')
            return redirect('update-user')
        if formErrors == 0:
            if user is not None:
                user.password = make_password(newpassword)
                user.save()
                login(request, user)
                messages.success(request, 'Password changed.')
                return redirect('update-user')
            else:
                return redirect('update-user')
        else:
            return redirect('update-user')
            
    return redirect('update-user')

@login_required(login_url='anonymous')
def AdminUsersTable(request):
    pageTable = "Manage Users"
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    search =  request.GET.get('search') if request.GET.get('search') != None else ''
    users = User.objects.filter(
        Q(first_name__icontains = search) |
        Q(last_name__icontains = search)|
        Q(username__icontains = search)|
        Q(email__icontains = search)
        )
    p = Paginator(users, 1)
    page = request.GET.get('page')
    users = p.get_page(page)
    context = {
        'table_data': users,
        'pageTable' : pageTable,
        'search' : search
    }
    return render(request,'tables.html', context)

@login_required(login_url='anonymous')
def AdminDictionaryTable(request):
    pageTable = "Manage Dictionary"
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    search =  request.GET.get('search') if request.GET.get('search') != None else ''
    dict_list = DictionaryList.objects.filter(
        Q(pinyin__icontains = search) |
        Q(hanzi__icontains = search) |
        Q(english__icontains = search) |
        Q(part_of_speech__speech__icontains = search) 
        )
    p = Paginator(dict_list, 1)
    page = request.GET.get('page')
    dict_list = p.get_page(page)
    context = {
        'table_data': dict_list,
        'pageTable' : pageTable,
        'search' : search
    }
    return render(request,'tables.html', context)

@login_required(login_url='anonymous')
def AdminLessonsTable(request):
    pageTable = "Manage Lessons"
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('lessons')
    search =  request.GET.get('search') if request.GET.get('search') != None else ''
    lessons = Lesson.objects.filter(
        Q(description__icontains = search) |
        Q(title__icontains = search) |
        Q(hsklevel__level__icontains = search) 
        )
    p = Paginator(lessons, 1)
    page = request.GET.get('page')
    lessons = p.get_page(page)
    context = {
        'table_data': lessons,
        'pageTable' : pageTable,
        'search' : search
    }
    return render(request,'tables.html', context)

@login_required(login_url='anonymous')
def AdminUpdateUser(request, pk):
    user = User.objects.get(id=pk)
    form = UserForm(instance=user)
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        form = UserForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            form.save()
            messages.success(request, "Account updated!")
            return redirect('superuser-edit-user', pk=user.id)
        else :
            for field, errors in form.errors.items():
                messages.error(request, '{}'.format(''.join(errors)))
            return redirect('superuser-edit-user', pk=user.id)
    context = {
        'form': form,
         'user' : user,
    }
    return render(request, 'update_user.html', context)

@login_required(login_url='anonymous')
def AdminDeleteUser(request, pk):

    user = User.objects.get(id=pk)
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        messages.info(request, f"{user.username} is deleted.")
        user.delete()
        return redirect('superuser-users')
    context = {'obj': user}
    return render(request, 'delete.html', context)

@login_required(login_url='anonymous')
def LogoutUser(request):
    logout(request)
    messages.info(request, 'You have been logged out')
    return redirect('dictionary')

def PleaseLoginToAccessThisPage(request):
    messages.info(request, 'Please log in to access this page')
    return redirect('login')

# dictionary views
@login_required(login_url='anonymous')
def AdminAddWordToDictionary(request):
    
    form = DictionaryListForm()
    label = "Add"
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        form = DictionaryListForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Word added to dictionary')
            return redirect('dictionary')
    context = {
        'form' : form,
        'label' : label
    }
    return render(request, 'add_word_to_dictionary.html', context)

@login_required(login_url='anonymous')
def AdminEditWordToDictionary(request, pk):
    label = 'Update'
    dict_list = DictionaryList.objects.get(id=pk)
    form = DictionaryListForm(instance=dict_list)
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        form = DictionaryListForm(request.POST, instance=dict_list)
        if form.is_valid():
            form.save()
            messages.success(request, 'Word updated')
            return redirect('superuser-edit-word', pk=dict_list.id)
    context = {
        'form' : form,
        'label' : label,
    }
    return render(request, 'add_word_to_dictionary.html', context)

@login_required(login_url='anonymous')
def AdminDeleteWordToDictionary(request, pk):

    dict_list = DictionaryList.objects.get(id=pk)
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        messages.info(request, f"{dict_list.pinyin} is deleted.")
        dict_list.delete()
        return redirect('dictionary')
    context = {'obj': dict_list}
    return render(request, 'delete.html', context)
    
def DictionaryPage(request):
    
    search =  request.GET.get('search') if request.GET.get('search') != None else ''
    speeches = SpeechList.objects.all()
    all_result = DictionaryList.objects.all()
    words = DictionaryList.objects.filter(
        Q(pinyin__icontains = search) |
        Q(hanzi__icontains = search) |
        Q(english__icontains = search) |
        Q(part_of_speech__speech__icontains = search) |
        Q(definition__icontains = search)
        )
    p = Paginator(words, 1)
    page = request.GET.get('page')
    words = p.get_page(page)
    context = {
        'words' : words,
        'speeches' : speeches,
        'all_result' : all_result,
        'dictionary_active' : 'active',
        'lesson_active' : '',
        'search': search,
        'page' : page,
    }
    return render(request, 'dictionary.html', context)

def DictionaryDetails(request, pk):
    word = DictionaryList.objects.get(id=pk)

    context = {
    'word' : word,   
    }
    return render(request, 'dictionary_details.html', context)


# Lesson Views
@login_required(login_url='anonymous')
def AdminAddLesson(request):
    
    form = LessonForm()
  
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        form = LessonForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Lesson created')
            return redirect('lessons')
    context = {
        'form' : form,
      
    }
    return render(request, 'lesson_add.html', context)

@login_required(login_url='anonymous')
def AdminEditLesson(request, pk):
 
    lesson = Lesson.objects.get(id=pk)
    form = LessonForm(instance=lesson)
    try:
        quiz = Quiz.objects.get(id=lesson.quiz.id)
        questions = json.loads(quiz.questions)
    except:
        quiz = None   
        questions = None

    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        form = LessonForm(request.POST, instance=lesson)
        if form.is_valid():
            form.save()
            messages.success(request, 'Lesson updated')
            return redirect('superuser-edit-lesson', pk=lesson.id)
    if request.method == 'POST' and request.POST.get('title'):
            try:
                quiz = Quiz.objects.get(id=lesson.quiz.id)
                quiz.title =  request.POST.get('title')
                quiz.description = request.POST.get('description')
                quiz.questions = request.POST.get('questions')
                quiz.time = request.POST.get('time')
                quiz.passingScore = request.POST.get('passingScore')
                quiz.save()
            except:
                quiz = Quiz.objects.create(
                    lesson = lesson,
                    title = request.POST.get('title'),
                    description = request.POST.get('description'),
                    questions = request.POST.get('questions'),
                    time = request.POST.get('time'),
                    passingScore = request.POST.get('passingScore'),
                )
               
    context = {
        'form' : form,
        'quiz' : quiz,
        'questions' : questions,
    }
    return render(request, 'lesson_edit.html', context)
@login_required(login_url='anonymous')
def AdminDeleteLesson(request, pk):

    lesson = Lesson.objects.get(id=pk)
    if request.user.is_authenticated and not request.user.is_staff:
        messages.warning(request, "Access denied, 403 forbidden page!")
        return redirect('dictionary')
    if request.method == 'POST':
        messages.info(request, f"{lesson.title} is deleted.")
        lesson.delete()
        return redirect('dictionary')
    context = {'obj': lesson}
    return render(request, 'delete.html', context)
@login_required(login_url='anonymous')
def LessonsPage(request):
    search =  request.GET.get('search') if request.GET.get('search') != None else ''
    hsklevels = HskLevel.objects.all()
    all_result = Lesson.objects.all()
    lessons = Lesson.objects.filter(
        Q(title__icontains = search) |
        Q(description__icontains = search) |
        Q(hsklevel__level__icontains = search) 
        )
    p = Paginator(lessons, 1)
    page = request.GET.get('page')
    lessons = p.get_page(page)
    context = {
        'lessons' : lessons,
        'all_result' : all_result,
        'hsklevels' : hsklevels,
        'dictionary_active' : '',
        'lesson_active' : 'active',
        'search': search,
        'page' : page,
    }
    return render(request, 'lesson.html', context)

@login_required(login_url='anonymous')
def LessonsDetails(request, pk):
    lesson = Lesson.objects.get(id=pk)
    try:
        quiz = Quiz.objects.get(id=lesson.quiz.id)
    except:
        quiz = None
    if request.method == 'POST' and request.POST.get('startQuiz'):
        try:
            quiz = Quiz.objects.get(id=lesson.quiz.id)
            data = {
                'title' : quiz.title,
                'description': quiz.description,
                'questions': quiz.questions,
                'time': quiz.time,
                'passingScore' : quiz.passingScore,
            }
            return JsonResponse(data)
        except:
            quiz = "[]"
            data = {
                
            }
            return JsonResponse(data)

    if request.method == 'POST' and request.POST.get('score'):
        result = Result.objects.create(
            quiz = quiz,
            user = request.user,
            score = request.POST.get('score'),
        )
    context = {
    'lesson' : lesson,   
    'quiz' : quiz,
    }
    return render(request, 'lesson_details.html',context)

  
   



