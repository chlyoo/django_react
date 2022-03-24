from django.db import models


# Create your models here.
class Account(models.Model):
	account_id = models.CharField(max_length=10, default="", unique=True)
	alias = models.CharField(max_length=20, default="")
	last_access = models.DateTimeField(auto_now_add=True)