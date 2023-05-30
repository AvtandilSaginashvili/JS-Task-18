
function switching() {

    var x = document.getElementById("svgpath");

if (document.getElementById("btn12").innerHTML == "On") {

    document.getElementById("btn12").innerHTML = "Off";
    document.getElementById("btn12").style.backgroundColor = "rgb(250,30,78)";
    document.getElementById("btn12").style.color = "#ffe800";
    document.getElementById("btn12").style.transition = "1s";
    document.getElementById("btn12").style.borderRadius = "4px 30px / 4px 30px";
    x.style.fill = "black";
    x.style.transition = "1s";

}else {

    document.getElementById("btn12").innerHTML = "On";
    document.getElementById("btn12").style.backgroundColor = "#0ACF83";
    document.getElementById("btn12").style.color = "#ffe800";
    document.getElementById("btn12").style.borderRadius = "30px 4px / 30px 4px";
    x.style.fill = "#FBE94E";
    x.style.transition = "1s";

}

}