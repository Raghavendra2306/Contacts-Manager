from django.contrib import admin
from .models import Contact_details

# Register your models here.

class ContactDetailsAdmin(admin.ModelAdmin):
    list_display = ('id','name','email','phone_no')

admin.site.register(Contact_details, ContactDetailsAdmin)