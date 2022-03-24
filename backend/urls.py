from django.urls import path
from .views import ping, AccountView

urlpatterns = [
    path('ping', ping),
    path('Account', AccountView.as_view()),
]
