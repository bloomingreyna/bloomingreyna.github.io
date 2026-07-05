var windowSpecial = document.getElementById("window-special");
var carSpecial = document.getElementById("car-special");

var aboutUsSlideshow = document.getElementById("about-us-slideshow");

window.addEventListener("resize", sizeUpdates);

function init() {
    windowSpecial.style.height = window.getComputedStyle(carSpecial).height;
    aboutUsSlideshow.style.backgroundImage = "url(../Images/dirtygutters.png)";
}

function sizeUpdates() {
    windowSpecial.style.height = window.getComputedStyle(carSpecial).height;
}

init()