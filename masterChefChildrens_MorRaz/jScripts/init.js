var x = 0, len = document.getElementsByClassName("tag").length; //x for counting arrows progress and len for multiple uses
$(document).ready(function () {
    startOn();
    if (getCookie() != "")
        show(getCookie());
    delCookie();
    //defining arrows
    $("#left").click(function () {
        x = (x - 1 < 0) ? len - 1 : x - 1;
        show(x % len);
    });
    $("#right").click(function () {
        x++;
        show(x % len);
    });

    //warning sign
    $("#warningSign").click(function () {
        $("#warning").slideDown("fast");
    }).mouseover(function () {
        $(this).attr('src', "https://png.icons8.com/ios/50/ff0000/error-filled.png").css({ "width": "55px", "height": "auto" });
    }).mouseout(function () {
        $(this).attr('src', "https://png.icons8.com/ios/50/000000/error-filled.png").css({ "width": "50px", "height": "auto" });
    });
    $("#warning #ext").click(function () {
        $("#warning").slideUp("fast");
    });

    //audio on hover & click
    $(".swish").hover(function () {
        document.getElementById("swish").play();
    }).mouseout(function () {
        document.getElementById("swish").pause();
        document.getElementById("swish").load();
    });
    $(".error").click(function () {
        document.getElementById("error").play();
        setTimeout(function () {
            document.getElementById("error").pause();
            document.getElementById("error").load();
        }, 1000);
    });
});
//functions:
//set the warning notifications
function setWarning(str) {
    for (i = 1; i <= 3; i++) {
        $("#warning #w" + i).css('display', "none");
    }
    for (i = 0; i < str.length; i++) {
        $("#warning #w" + str.charAt(i)).css('display', "block");
    }
}
//show specific slide
function show(index) {
    for (i = 0; i < len; i++) {
        if (index == i)
            $("#s" + i).fadeIn("fast");
        else
            $("#s" + i).fadeOut("fast");
    }
    setWarning($("#s" + index).attr('data-warning'));
    $("#warningSign").css("display", "block");
    startOff();
}
//hide startPage
function startOff() {
    document.getElementById("startPage").style.display = "none";
    $("#warningSign").show();
    $(".arrows").show();
}

//home.html music
$("#mute").click(function () {
    var voice = "https://png.icons8.com/ios/64/000000/medium-volume-filled.png";
    if ($(this).attr('src') == voice){
        $(this).attr('src', "https://png.icons8.com/material/64/000000/no-audio.png");
        document.getElementById("BGmusic").pause();
        document.getElementById("BGmusic").load();
        document.getElementById("BGmusic").loop = false;
    }  
    else {
        $(this).attr('src', voice);
        document.getElementById("BGmusic").loop = true;
        document.getElementById("BGmusic").play();
    }      
});
//show startPage
function startOn() {
    (document.getElementById("startPage")).style.display = "block";
    for (i = 0; i < len; i++) {
        $("#s" + i).hide();
    }
    $("#warningSign").hide();
    $(".arrows").hide();
}

function setCookie(cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + 20000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = "slide=" + cvalue + ";" + expires + ";path=/";
}
function delCookie() {
    var d = new Date();
    d.setTime(d.getTime() - 200000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = "slide=0;" + expires + ";path=/";
}
function getCookie() {
    var name = "slide=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//open another page in specific slide
function openSlide(name, slide) {
    setCookie(slide);
    window.open(name+".html","_self");
}



