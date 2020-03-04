from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.urls import reverse
from django.views import generic
from .models import *


def home(request):
    for player in Player.objects.all():
        player.number_correct_answer = 0
        player.number_total_answer = 0
        player.save()
    return render(request, "quizz/quizzhome.html")


def quizz(request, question_id):
    question = get_object_or_404(Question, question_id=question_id)
    player1 = get_object_or_404(Player, player_id=1)
    player2 = get_object_or_404(Player, player_id=2)
    player3 = get_object_or_404(Player, player_id=3)
    player4 = get_object_or_404(Player, player_id=4)
    context = {"question": question, "answers": question.answers.all()}
    if request.method == "POST":
        selected_answer_player_1 = question.answers.filter(pk=request.POST["answer_player_1"]).first()
        selected_answer_player_2 = question.answers.filter(pk=request.POST["answer_player_2"]).first()
        selected_answer_player_3 = question.answers.filter(pk=request.POST["answer_player_3"]).first()
        selected_answer_player_4 = question.answers.filter(pk=request.POST["answer_player_4"]).first()
        if question.correct_answer == selected_answer_player_1:
            player1.number_correct_answer += 1
            player1.number_total_answer += 1
            player1.save()
        else:
            player1.number_total_answer += 1
            player1.save()
        if question.correct_answer == selected_answer_player_2:
            player2.number_correct_answer += 1
            player2.number_total_answer += 1
            player2.save()
        else:
            player2.number_total_answer += 1
            player2.save()
        if question.correct_answer == selected_answer_player_3:
            player3.number_correct_answer += 1
            player3.number_total_answer += 1
            player3.save()
        else:
            player3.number_total_answer += 1
            player3.save()
        if question.correct_answer == selected_answer_player_4:
            player4.number_correct_answer += 1
            player4.number_total_answer += 1
            player4.save()
        else:
            player4.number_total_answer += 1
            player4.save()
        if not selected_answer_player_1:
            selected_answer_player_1 = "Não respondeu"
        if not selected_answer_player_2:
            selected_answer_player_2 = "Não respondeu"
        if not selected_answer_player_3:
            selected_answer_player_3 = "Não respondeu"
        if not selected_answer_player_4:
            selected_answer_player_4 = "Não respondeu"
        context1 = {
            "question": question,
            "answers": question.answers.all(),
            "question_exists": Question.objects.filter(question_id=question_id + 1).exists(),
            "selected_answer_player_1": selected_answer_player_1,
            "selected_answer_player_2": selected_answer_player_2,
            "selected_answer_player_3": selected_answer_player_3,
            "selected_answer_player_4": selected_answer_player_4,
            "correct_answer": question.correct_answer,
            "number_correct_answer_player_1": player1.number_correct_answer,
            "number_correct_answer_player_2": player2.number_correct_answer,
            "number_correct_answer_player_3": player3.number_correct_answer,
            "number_correct_answer_player_4": player4.number_correct_answer,
            "number_answer": player1.number_total_answer,
            "next_id": question_id + 1,
        }
        return render(request, "quizz/quizzresult.html", context1)
    else:
        return render(request, "quizz/quizzquizz.html", context)
