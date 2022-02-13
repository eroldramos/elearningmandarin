from django.urls import path
from . import views

urlpatterns = [
    path('update-user/', views.UpdateUserPage, name = 'update-user'),
    path('register/', views.RegisterPage, name = 'register'),
    path('login/', views.LoginPage, name = 'login'),
    path('logout/', views.LogoutUser, name = 'logout'),
    path('anonymous-user/', views.PleaseLoginToAccessThisPage, name = 'anonymous'),
    path('passwordreset/', views.PasswordReset, name = 'passwordreset'),
    path('superuser/users/', views.AdminUsersTable, name = 'superuser-users'),
    path('superuser/dictionary/', views.AdminDictionaryTable, name = 'superuser-dictionary'),
    path('superuser/lessons/', views.AdminLessonsTable, name = 'superuser-lessons'),
    path('superuser/quizzes/', views.AdminQuizzesTable, name = 'superuser-quizzes'),
    path('superuser/activitylogs/', views.AdminActivityLogTable, name = 'superuser-activitylogs'),
    path('superuser/edit-user/<str:pk>/', views.AdminUpdateUser, name = 'superuser-edit-user'),
    path('superuser/delete-user/<str:pk>/', views.AdminDeleteUser, name = 'superuser-delete-user'),
    path('superuser/add-word/', views.AdminAddWordToDictionary, name = 'superuser-add-word'),
    path('superuser/edit-word/<str:pk>/', views.AdminEditWordToDictionary, name = 'superuser-edit-word'),
    path('superuser/delete-word/<str:pk>/', views.AdminDeleteWordToDictionary, name = 'superuser-delete-word'),
    path('', views.DictionaryPage, name = 'dictionary'),
    path('dictionary/<str:pk>/', views.DictionaryDetails, name = 'dictionary-details'),
    path('lessons/', views.LessonsPage, name = 'lessons'),
    path('lessons/<str:pk>/', views.LessonsDetails, name = 'lessons-details'),
    path('superuser/add-lesson/', views.AdminAddLesson, name = 'superuser-add-lesson'),
    path('superuser/edit-lesson/<str:pk>/', views.AdminEditLesson, name = 'superuser-edit-lesson'),
    path('superuser/delete-lesson/<str:pk>/', views.AdminDeleteLesson, name = 'superuser-delete-lesson'),
    path('superuser/delete-quiz/<str:pk>/', views.AdminDeleteQuiz, name = 'superuser-delete-quiz'),
    path('superuser/delete-activity/<str:pk>/', views.AdminDeleteActivityLog, name = 'superuser-delete-activitylog'),
    
]
