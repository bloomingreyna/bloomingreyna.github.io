var aboutUsSlide = Object(0);
var slideIndexes = {aboutUs: aboutUsSlide};

function modulo(a, b) {
    return ((a % b) + b) % b;
}

function headerHoverBehavior(element) {
    element.style.color = "white";
}

function headerIdleBehavior(element) {
    element.style.color = "rgb(239, 214, 52)";
}

function slideshowHoverBehavior(slideshow, button1, button2) {
    var b1 = document.getElementById(button1);
    var b2 = document.getElementById(button2);
    b1.style.backgroundColor = "rgba(51, 60, 122, 0.5)";
    b2.style.backgroundColor= "rgba(51, 60, 122, 0.5)";
    slideshow.style.boxShadow = "0mm 0mm 10mm black";
}

function slideshowIdleBehavior(slideshow, button1, button2) {
    var b1 = document.getElementById(button1);
    var b2 = document.getElementById(button2);
    b1.style.backgroundColor = "rgba(20, 24, 50, 0.5)";
    b2.style.backgroundColor= "rgba(20, 24, 50, 0.5)";
    slideshow.style.boxShadow = "0mm 0mm 2mm black";
}

function slideshowButtonClick(slideshowName, slideClass, slideIndex, increment) {
    var slides = document.getElementsByClassName(slideClass);
    var slideshow = document.getElementById(slideshowName);
    var nextSlide = modulo(slideIndexes[slideIndex] + increment, slides.length);
    console.log(nextSlide);
    slideshow.style.backgroundImage = "url(" + slides[nextSlide].src + ")";
    slideIndexes[slideIndex] = nextSlide;
}