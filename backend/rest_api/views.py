from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
import json

@api_view(['GET','POST'])
def Movie(request):
    movie_name=request.GET.get("title")
    url="https://www.omdbapi.com/?s="+movie_name+"&apikey=8157e43a"
    try:
        resp=requests.get(url)
        movie_data=resp.json()    
        return Response({'status':200,'data':movie_data.get("Search")})
    except Exception as e:
        print("Unable to fetch api ",e)
        return Response({'status':500,'error':'Unable to fetch api'})
    
@api_view(['GET','POST'])
def MovieDetail(request,imdbID):
    url="https://www.omdbapi.com/?i="+imdbID+"&apikey=8157e43a"
    try:
        resp=requests.get(url)
        movie_data=resp.json()    
        print(movie_data)
        return Response({'status':200,'data':movie_data})
    except Exception as e:
        print("Unable to fetch api ",e)
        return Response({'status':500,'error':'Unable to fetch api'})

    
