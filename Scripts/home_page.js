var windowSpecial = document.getElementById("window-special");
var carSpecial = document.getElementById("car-special");

window.addEventListener("resize", sizeUpdates);

function init() {
    windowSpecial.style.height = window.getComputedStyle(carSpecial).height;
}

function sizeUpdates() {
    windowSpecial.style.height = window.getComputedStyle(carSpecial).height;
}

init()