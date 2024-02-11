from rest_framework import serializers
from note_app.models import noteModel

class noteSerializer(serializers.ModelSerializer):
    class Meta:
        model = noteModel
        fields = "__all__"