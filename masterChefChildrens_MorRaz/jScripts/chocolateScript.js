$("#ChocolateBallsPopup").hover(function () {
    $(this).attr("src", "https://png.icons8.com/metro/52/f1c40f/documentary.png");
}).mouseout(function () {
    $(this).attr("src", "https://png.icons8.com/metro/52/666666/documentary.png");
}).click(function () {
    $("#CVpopup").slideDown("fast");
});
$("#CVpopup #CVext").click(function () {
    $("#CVpopup").slideUp("fast");
    document.getElementById('vid').pause();
});