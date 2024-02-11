from django.contrib import admin
from note_app.models import noteModel

# Register your models here.
class noteAdminModel(admin.ModelAdmin):
    list_display=('title','description')


admin.site.register(noteModel,noteAdminModel)
