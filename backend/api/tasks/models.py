from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4


class Task(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    relative_id = models.IntegerField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    task = models.CharField(max_length=200, null=True)
    completed = models.BooleanField(default=False, null=True, blank=False)

    def __str__(self):
        return self.task
