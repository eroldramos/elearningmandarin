from django.urls import path
from . import views

urlpatterns = [
    path('update-user/', views.UpdateUserPage, name = 'update-user'),
    path('register/', views.RegisterPage, name = 'register'),
    path('login/', views.LoginPage, name = 'login'),
    path('admin-login/', views.AdminLoginPage, name = 'admin-login'),
    path('logout/', views.LogoutUser, name = 'logout'),
    path('anonymous-user/', views.PleaseLoginToAccessThisPage, name = 'anonymous'),
    path('passwordreset/', views.PasswordReset, name = 'passwordreset'),
    path('superuser/users/', views.AdminUsersTable, name = 'superuser-users'),
    path('superuser/dictionary/', views.AdminDictionaryTable, name = 'superuser-dictionary'),
    path('superuser/lessons/', views.AdminLessonsTable, name = 'superuser-lessons'),
    path('superuser/quizzes/', views.AdminQuizzesTable, name = 'superuser-quizzes'),
    path('superuser/activitylogs/', views.AdminActivityLogTable, name = 'superuser-activitylogs'),
    path('superuser/achievements/', views.AdminAchievementTable, name = 'superuser-achievements'),
    path('superuser/edit-user/<str:pk>/', views.AdminUpdateUser, name = 'superuser-edit-user'),
    path('superuser/add-word/', views.AdminAddWordToDictionary, name = 'superuser-add-word'),
    path('superuser/edit-word/<str:pk>/', views.AdminEditWordToDictionary, name = 'superuser-edit-word'),
    path('', views.DictionaryPage, name = 'dictionary'),
    path('dictionary/<str:pk>/', views.DictionaryDetails, name = 'dictionary-details'),
    path('lessons/', views.LessonsPage, name = 'lessons'),
    path('lessons/<str:pk>/', views.LessonsDetails, name = 'lessons-details'),
    path('superuser/add-lesson/', views.AdminAddLesson, name = 'superuser-add-lesson'),
    path('superuser/edit-lesson/<str:pk>/', views.AdminEditLesson, name = 'superuser-edit-lesson'),
    path('delete-account/', views.DeletePersonalAccount, name = 'delete-account'),
    path('mocktest/', views.MockTestPage, name = 'mocktest'),
    path('superuser/add-mocktest/', views.AdminAddMockTest, name = 'superuser-add-mocktest'),
    path('superuser/edit-mocktest/<str:pk>/', views.AdminEditMockTest, name = 'superuser-edit-mocktest'),
    path('mocktest/<str:pk>/', views.MockTestDetails, name = 'mocktest-details'),
    path('my-activitylogs/', views.MyActivityLogs, name = 'my-activitylogs'),
    path('my-achievements/', views.MyAchievements, name = 'my-achievements'),
    
    
]
