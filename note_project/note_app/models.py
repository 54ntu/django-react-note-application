from django.db import models

# Create your models here.
class noteModel(models.Model):
    title = models.CharField(max_length = 100, null= False, blank=False)
    description = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.title


