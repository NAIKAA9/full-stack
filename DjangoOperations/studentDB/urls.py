from django.urls import path
from .views import home,about,register_user,logout_user
urlpatterns = [
    path('',home,name='home'),
    path('about/',about,name='about'),
    path('register/',register_user,name='register'),
    path('logout/',logout_user,name="logout")

]
