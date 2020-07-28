from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from det.models import DetUsers
from django.db import connection
from . import forms
from django.db.models import Q
from django.template.response import TemplateResponse
from django.contrib.sessions.models import Session


def index(request):
    if 'alldata' in request.session:
        return render(request, 'det/home.html')
    else:
        return render(request, 'det/index.html')


def home(request):
    if 'alldata' in request.session:
        alldataone = request.session['alldata']
        return render(request, 'det/home.html', alldataone)
    else:
        return render(request, 'det/index.html')


def etracker(request):
    if 'alldata' in request.session:
        alldataone = request.session['alldata']
        return render(request, 'det/etracker.html', alldataone)
    else:
        return render(request, 'det/index.html')


def lmoney(request):
    if 'alldata' in request.session:
        alldataone = request.session['alldata']
        return render(request, 'det/lmoney.html', alldataone)
    else:
        return render(request, 'det/index.html')


def signout(request):
    if 'signout' in request.POST:
        if 'alldata' in request.session:
            request.session.flush()
            return redirect('/')


def usersignup(request):

    userdetails = DetUsers()
    fname1 = request.GET['fname']
    lname1 = request.GET['lname']
    useremail1 = request.GET['emailid']
    userpass1 = request.GET['passwrd']
    userdetails.fname = fname1
    userdetails.lname = lname1
    userdetails.useremail = useremail1
    userdetails.userpass = userpass1
    dbusername = DetUsers.objects.filter(useremail=useremail1)
    if not dbusername:
        try:
            userdetails.save()
            return HttpResponse('true')
        except:
            return HttpResponse('false')
    else:
        return HttpResponse('userexist')


def userlogin(request):
    useremaillogin = request.GET['useremail']
    userpasswordlogin = request.GET['userpassword']
    dbusername = DetUsers.objects.all().filter(Q(useremail=useremaillogin) & Q(userpass=userpasswordlogin))
    if not dbusername:
        return HttpResponse('false')
    else:
        #return HttpResponse('true')
        userhomedata = dbusername.values()[0]
        request.session['alldata'] = userhomedata
        #return HttpResponse(userhomedata)
        return render(request, 'det/home.html', userhomedata)

