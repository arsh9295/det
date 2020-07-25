from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from det.models import DetUsers
from django.db import connection
from . import forms
from django.db.models import Q


def index(request):
    return render(request, 'det/index.html')


def home(request):
    return render(request, 'det/home.html')


def usersignup(request):
    userdetails = DetUsers()
    userdetails.fname = request.POST['first_name']
    userdetails.lname = request.POST['last_name']
    userdetails.useremail = request.POST['emailid']
    userpass = request.POST['passwordone']
    passwordtwo = request.POST['passwordtwo']
    if userpass == passwordtwo:
        userdetails.userpass = userpass
    userdetails.save()
    #return redirect('usersignup')
    return render(request, 'det/index.html')


def userlogin(request):
  useremaillogin = request.GET['useremail']
  userpasswordlogin = request.GET['userpassword']
  #print(useremaillogin)
  #print(userpasswordlogin)
  dbusername = DetUsers.objects.filter(Q(useremail=useremaillogin) & Q(userpass=userpasswordlogin))
  print(dbusername)
  if not dbusername:
      return HttpResponse('false')
      #return render(request, 'det/home.html')
  else:
      return HttpResponse('true')
  '''  #userdata = DetUsers.objects.all()
    #userdetails = DetUsers()
    userEmailLogin = request.POST['useremail']
    userPassword = request.POST['userpassword']

    dbusername = DetUsers.objects.filter(Q(useremail=userEmailLogin) & Q(userpass=userPassword))
    if not dbusername:
        msg = 'Wrong Credentials.'
        return HttpResponse("Wrong Credentials")
       # return redirect('/')
    else:
        return render(request, 'det/home.html')
'''