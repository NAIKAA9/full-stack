from django.http import HttpResponse
from django.shortcuts import render
from student.models import Student
from django.db.models import Q
from .forms import Contact_form
def home(request):
     # return HttpResponse("<h1>Welcome to Home");
     # student = Student.objects.filter(last_name='p',age__gte = 25)
     student = Student.objects.filter(Q(first_name = 'rk') | Q(age__gte = 25))
     # select * from Student where age > 18;
     return render(request,'home.html',{'s':student})

def about(request):
     return render(request,'about.html')
def contact(request):
     forms = Contact_form()
     return render(request,'contact.html',{'forms':forms})
