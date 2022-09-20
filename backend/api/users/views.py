from rest_framework import viewsets
from rest_framework import permissions
from django.contrib.auth import get_user_model

from . import serializers

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.AllowAny]