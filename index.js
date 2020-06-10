
function changeLinkText(lnk) {
 
    if (lnk == 'home'){
        document.getElementById('divLeft_Default').style.display = "block";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById("divLeft_RLinks").style.display = "none";
        document.getElementById('divRight').innerHTML = "Home link clicked. Default test displayed.";
        document.getElementById('ls_Heading').innerHTML = "ITC-111";
        document.getElementById('rs_Heading').innerHTML = "Intro to Programming <br>w/HTML, CSS & JavaScript";
    }else if (lnk == 'classEx'){
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "block";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById("divLeft_RLinks").style.display = "none";
        document.getElementById('divRight').innerHTML = "Default description for Class Exercise Link.";
        document.getElementById('ls_Heading').innerHTML = "Class Exercises";
        document.getElementById('rs_Heading').innerHTML = "Exercise Description";
    }else if (lnk == 'assign'){
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "block";
        document.getElementById("divLeft_RLinks").style.display = "none";
        document.getElementById('divRight').innerHTML = "Default description for Assignment Link.";
        document.getElementById('ls_Heading').innerHTML = "Assignments";
        document.getElementById('rs_Heading').innerHTML = "Assignment Brief";
    }else if (lnk == 'resource'){   
        document.getElementById('divLeft_Default').style.display = "none";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById("divLeft_RLinks").style.display = "block";
        document.getElementById('divRight').innerHTML = "Default description for Resources Link.";
        document.getElementById('ls_Heading').innerHTML = "Resources";
        document.getElementById('rs_Heading').innerHTML = "Resource Examples";
    }else{
        document.getElementById('divLeft_Default').style.display = "block";
        document.getElementById('divLeft_CELinks').style.display = "none";
        document.getElementById('divLeft_ALinks').style.display = "none";
        document.getElementById("divLeft_RLinks").style.display = "none";
        document.getElementById('divRight').style.display = "none";

function changeDivRightText(txt) {
    document.getElementById('rs_Heading').innerHTML = txt;
}
