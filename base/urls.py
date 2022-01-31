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
    path('superuser/edit-user/<str:pk>/', views.AdminUpdateUser, name = 'superuser-edit-user'),
    path('superuser/delete-user/<str:pk>/', views.AdminDeleteUser, name = 'superuser-delete-user'),
]
