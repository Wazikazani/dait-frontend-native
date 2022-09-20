from rest_framework import serializers
from django.conf import settings
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['full_name', 'email', 'date_joined']
