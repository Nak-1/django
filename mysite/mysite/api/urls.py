from django.contrib import admin
from django.urls import path, include
from polls.api.urls import post_router

router = DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('polls.urls')),
]
