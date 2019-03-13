var slideItem = 0;
window.onload = function() {
    setInterval(passarSlide, 3000);

    var slidewidth = document.getElementById("slideshow").offsetWidth;
    var objs = document.getElementsByClassName("slide");
    for(var i in objs) {
        objs[i].style.width = slidewidth + "px";
    }
}
function passarSlide() {
    var slidewidth = document.getElementById("slideshow").offsetWidth;

    if(slideItem >=3) {
        slideItem = 0;
    }
    else{
        slideItem++;
    }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";

    var x = document.getElementsByClassName("bolinha");
                var i;
                for (i = 0; i < x.length; i++) {
                    x[i].style.background = "#CCCCCC"
                }
                document.getElementById(slideItem).style.background = "red"; 
}
function mudarSlide(pos) {
    slideItem = pos;
    var slidewidth = document.getElementById("slideshow").offsetWidth;
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
    
    var x = document.getElementsByClassName("bolinha");
                var i;
                for (i = 0; i < x.length; i++) {
                    x[i].style.background = "#CCCCCC"
                }
                document.getElementById(slideItem).style.background = "red"; 
}
function toggleMenu(){

    var menu = document.getElementById("menu");
    
    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}