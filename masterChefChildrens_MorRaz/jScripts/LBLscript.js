var LBL_list = $("#LBL").text().split(' '),
		LBL_counter = 0,
		LBL_fontsizestr = $("#LBL").css("font-size"),
		LBL_fontSize = parseInt(LBL_fontsizestr.substring(0, LBL_fontsizestr.length - 2));

$("#LBL").html('');
for (i = 0; i < LBL_list.length; i++) {
    for (k = 0; k < LBL_list[i].length; k++) {
        $("#LBL").append($('<span></span>').text(LBL_list[i][k]).attr('id', "span" + LBL_counter));
        LBL_counter++;
    }
    $("#LBL").append(' ');
}
var LBL_x = 0;
setInterval(function () {
    LBL_show(LBL_x % LBL_counter);
    LBL_x++;
}, 180);
function LBL_show(index) {
    for (i = 0; i < LBL_counter; i++) {
        if (i == index)
            $("#LBL #span" + i).css("color", "#885646");
        else
            $("#LBL #span" + i).css("color", "#0A014F");
    }
}