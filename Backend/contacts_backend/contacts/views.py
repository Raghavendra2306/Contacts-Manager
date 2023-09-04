from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ContactDetailsSerializer
from .models import Contact_details

# Create your views here.
class getContactDetails(viewsets.ModelViewSet):
    serializer_class = ContactDetailsSerializer
    queryset = Contact_details.objects.all()

class addContactDetails(viewsets.ModelViewSet):
    queryset = Contact_details.objects.all()
    serializer_class = ContactDetailsSerializer
