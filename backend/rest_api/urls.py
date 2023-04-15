
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
   path('movie/',views.Movie,name='movies'),
   path('movieDetail/<str:imdbID>',views.MovieDetail,name="movieDetail")
]
