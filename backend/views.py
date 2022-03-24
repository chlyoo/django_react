from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import AccountSerializer
from .models import Account 
# Create your views here.

def ping(request):
	return HttpResponse("pong")

class AccountView(generics.ListAPIView):
	queryset = Account.objects.all()
	serializer_class = AccountSerializer