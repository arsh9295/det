window.onload = initAll;

var loginDetails
//var useremailid = document.getElementById('useremail');
var userpasswordid = document.getElementById('userpassword');

function initAll() {
   /* document.getElementById('wrong_credentials').style.display = 'none'
    document.getElementById('loading').style.display = 'none'
    document.getElementById('emptyemail').style.display = 'none'
    document.getElementById('emptypass').style.display = 'none'
    loginDetails = document.getElementById('login');
    loginDetails.onclick = userLogin;
  //  userpasswordid.onfocusout = userred;
    userpasswordid.onfocusout = passred;*/
}

function onloginclick() {
    document.getElementById('wrong_credentials').style.display = 'none'
    document.getElementById('loading').style.display = 'none'
    document.getElementById('emptyemail').style.display = 'none'
    document.getElementById('emptypass').style.display = 'none'
    document.getElementById('signupModalCenter').style.display = 'none'
    loginDetails = document.getElementById('login');
    loginDetails.onclick = userLogin;
  //  userpasswordid.onfocusout = userred;
    userpasswordid.onfocusout = passred;
}

//var useremail = useremailid.value;
var userpassword;
var useremail;
function userred(){
    //alert('pass');
    useremail = document.getElementById('useremail').value;
    if(useremail == "") {
        document.getElementById('useremail').style.border = '2px solid red';
        document.getElementById('emptyemail').style.display = 'block'
    }
    else {
        document.getElementById('useremail').style.border = '1px solid black';
        document.getElementById('emptyemail').style.display = 'none'
    }
}

function passred() {
    userpassword = document.getElementById('userpassword').value;
    if(userpassword == "") {
        document.getElementById('userpassword').style.border = '2px solid red';
        document.getElementById('emptypass').style.display = 'block'
    }
    else {
        document.getElementById('userpassword').style.border = '1px solid black';
        document.getElementById('emptypass').style.display = 'none'
    }
}

function userLogin() {
    //alert(useremail)
    //alert(userpassword)
    useremail = document.getElementById('useremail').value;
    userpassword = document.getElementById('userpassword').value;
    if(useremail == "" || userpassword == ""){
        //alert('pass')

        if(useremail == ""){
            userred();
        }
        if(userpassword == ""){
            passred();
        }
    }
    else {
        document.getElementById('loading').style.display = 'block'
        var url = '/login?useremail='+useremail+'&userpassword='+userpassword;
        var xhttp = new XMLHttpRequest();
        //alert(xhttp.responseText)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                loginresponse = xhttp.responseText;
                //alert(abc)
                if (loginresponse=='true'){
                    document.getElementById('loading').style.display = 'none'
                    window.location.href = 'home'
                }
                else {
                    document.getElementById('loading').style.display = 'none'
                      var x = document.getElementById("wrong_credentials");
                      //if (x.style.display === "none") {
                        x.style.display = "block";
                      //} else {
                       // x.style.display = "none";
                      //}
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}