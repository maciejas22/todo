from django.urls import path

from .views import TaskList, TaskDetail

urlpatterns = [
    path("tasks/", TaskList.as_view(), name="tasks_list"),
    path("tasks/<int:relative_id>/", TaskDetail.as_view(), name="task_detail"),
]
