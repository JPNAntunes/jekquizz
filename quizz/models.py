from django.db import models


class Answer(models.Model):
    answer = models.TextField()

    def __str__(self):
        return self.answer


class Question(models.Model):
    question = models.CharField(max_length=200)
    question_id = models.IntegerField(unique=True)
    answers = models.ManyToManyField(Answer, related_name="answers")
    correct_answer = models.ForeignKey(Answer, on_delete=models.CASCADE)

    def __str__(self):
        string = "(" + str(self.question_id) + "): " + self.question
        return string


class Player(models.Model):
    number_correct_answer = models.IntegerField(default=0)
    number_total_answer = models.IntegerField(default=0)
    player_id = models.IntegerField(unique=True)
