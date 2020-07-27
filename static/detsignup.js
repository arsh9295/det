window.onload= detsignup;


function detsignup() {
    /*var signup = document.getElementById('signup');
        alert('utkarsh')
    document.getElementById('signupmodal').style.display = 'none';
    document.getElementById('validemailone').style.display = 'none';*/
}
function onsignupclick() {
    var signup = document.getElementById('signup');
    document.getElementById('signupmodal').style.display = 'none';
    document.getElementById('validemailone').style.display = 'none';
    document.getElementById('passwordnotmatch').style.display = 'none';
    document.getElementById("something_wrong").style.display = 'none';
    document.getElementById("signup_success").style.display = 'none';
    document.getElementById('loadingsignup').style.display = 'none';
    document.getElementById("user_exist").style.display = 'none';
    loginDetails = document.getElementById('signup');
    loginDetails.onclick = usersignup;
}
function getvalue() {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;
    var emailid = document.getElementById('emailid').value;
    var passwordone = document.getElementById('passwordone').value;
    var passwordtwo = document.getElementById('passwordtwo').value;
    return allvalues = [fname, lname, emailid, passwordone, passwordtwo];
}

var fnfocnt = 0;
var lnfocnt = 0;
var emailfocnt = 0;
var passfocnt = 0;
var passtfocnt = 0;
function fnamefo() {
    getvalue();
    fnfocnt = fnfocnt + 1;
    if ( allvalues[0] == "" ) {
        document.getElementById('first_name').style.border = '2px solid red';
        document.getElementById('signupmodal').style.display = 'block'
        if (fnfocnt == 1){
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText +','+ document.getElementById('first_name').placeholder;
        }
        else {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText;
        }
    }
    else{
        document.getElementById('first_name').style.border = '1px solid gray';
    }
}
function lnamefo() {
    getvalue();
    lnfocnt = lnfocnt + 1;
    if ( allvalues[1] == "" ) {
        document.getElementById('last_name').style.border = '2px solid red';
        document.getElementById('signupmodal').style.display = 'block'
        if (lnfocnt == 1) {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText +','+ document.getElementById('last_name').placeholder;
        }
        else {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText;
        }
    }
    else{
        document.getElementById('last_name').style.border = '1px solid gray';
    }
}

function emailvalidation() {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailvalid = (document.getElementById('emailid').value).toLowerCase();
        if (re.test(emailvalid)){
            document.getElementById('emailid').style.border = '1px solid gray';
            document.getElementById('validemailone').style.display = 'none';
            return 'valid'
        }
        else {
            document.getElementById('emailid').style.border = '2px solid red';
            document.getElementById('validemailone').style.display = 'block';
            return 'invalid'
        }
}

function emailidfo() {
    getvalue();
    emailfocnt = emailfocnt +1;
    if ( allvalues[2] == "" ) {
        document.getElementById('emailid').style.border = '2px solid red';
        document.getElementById('signupmodal').style.display = 'block'
        if (emailfocnt == 1) {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText +','+ document.getElementById('emailid').placeholder;
        }
        else {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText;
        }
    }
    else{
        document.getElementById('emailid').style.border = '1px solid gray';
        emailvalidation();
    }
}

function passwordonefo() {
    getvalue();
    passfocnt = passfocnt + 1;
    if ( allvalues[3] == "" ) {
        document.getElementById('passwordone').style.border = '2px solid red';
        document.getElementById('signupmodal').style.display = 'block'
        if (passfocnt == 1) {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText +','+ document.getElementById('passwordone').placeholder;
        }
        else {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText;
        }
    }
    else{
        document.getElementById('passwordone').style.border = '1px solid gray';
    }
}

function passwordvalidation() {
    if (document.getElementById('passwordone').value == document.getElementById('passwordtwo').value){
        document.getElementById('passwordnotmatch').style.display = 'none';
        document.getElementById('passwordtwo').style.border = '1px solid gray';
    }
    else {
        document.getElementById('passwordnotmatch').style.display = 'block';
        document.getElementById('passwordtwo').style.border = '2px solid red';
    }
}

function passwordtwofo() {
    getvalue();
    passtfocnt = passfocnt + 1;
    if ( allvalues[4] == "" ) {
        document.getElementById('passwordtwo').style.border = '2px solid red';
        document.getElementById('signupmodal').style.display = 'block'
        if (passtfocnt == 1) {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText +','+ document.getElementById('passwordtwo').placeholder;
        }
        else {
            document.getElementById('blankmodal').innerText = document.getElementById('blankmodal').innerText;
        }
    }
    else{
        document.getElementById('passwordtwo').style.border = '1px solid gray';
        passwordvalidation();
    }
}

function usersignup() {
    getvalue();
    //alert(allvalues[4] != allvalues[3])
    if( allvalues[0] == "" || allvalues[1] == "" || allvalues[2] == "" || allvalues[3] == "" | allvalues[4] == "" || allvalues[4] != allvalues[3] || emailvalidation() == 'invalid'){

    }
    else {
        document.getElementById('loadingsignup').style.display = 'block'
        var url = '/usersignup?fname='+allvalues[0]+'&lname='+allvalues[1]+'&emailid='+allvalues[2]+'&passwrd='+allvalues[3];
        var xhttp = new XMLHttpRequest();
        //alert(xhttp.responseText)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                signupresponse = xhttp.responseText;
                document.getElementById('signupmodal').style.display = 'none';
                document.getElementById('validemailone').style.display = 'none';
                document.getElementById('passwordnotmatch').style.display = 'none';
                document.getElementById('loadingsignup').style.display = 'none';
                //alert(abc)
                if (signupresponse=='true'){
                    document.getElementById("something_wrong").style.display = 'none';
                    document.getElementById("user_exist").style.display = 'none';
                    document.getElementById("signup_success").style.display = 'block';
                }
                else if (signupresponse=='userexist'){
                    document.getElementById("something_wrong").style.display = 'none';
                    document.getElementById("signup_success").style.display = 'none';
                    document.getElementById("user_exist").style.display = 'block';
                }
                else {
                    document.getElementById("signup_success").style.display = 'none';
                    document.getElementById("user_exist").style.display = 'none';
                    document.getElementById("something_wrong").style.display = 'block';
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

}