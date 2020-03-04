from django.urls import path
from . import views

urlpatterns = [
    path('<int:question_id>/', views.quizz, name='quizz_quizz'),
    path('', views.home, name='quizz_home'),
]
