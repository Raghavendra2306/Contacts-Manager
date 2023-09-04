from django.db import models

# Create your models here.

class Contact_details(models.Model):
    name = models.CharField(max_length = 120)
    email = models.EmailField(max_length = 254)
    phone_no = models.BigIntegerField()

    def __str__(self):
        return self.name