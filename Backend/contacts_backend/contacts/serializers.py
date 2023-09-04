from rest_framework import serializers
from .models import Contact_details

class ContactDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact_details
        fields = ('id','name','email','phone_no')

