from rest_framework import generics, permissions

from .serializers import TaskSerializer


class TaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.task_set.all()

    def perform_create(self, serializer):
        nitems = self.request.user.task_set.all().count() + 1
        serializer.save(user=self.request.user, relative_id=nitems)


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = "relative_id"

    def get_queryset(self):
        return self.request.user.task_set.all()

    def perform_destroy(self, instance):
        instance.delete()
        nitems = self.request.user.task_set.all().count()
        print(nitems)
        for i in range(instance.relative_id + 1, nitems + 2):
            task = self.request.user.task_set.get(relative_id=i)
            print(task)
            task.relative_id -= 1
            task.save()
