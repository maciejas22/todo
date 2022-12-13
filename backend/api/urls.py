from django.urls import path, include

urlpatterns = [
    path("api/", include("api.auth.urls")),
    path("api/", include("api.tasks.urls")),
]
