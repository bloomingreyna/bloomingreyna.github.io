var aboutUsSlide = Object(0);
var slideIndexes = {aboutUs: aboutUsSlide};

class SiteHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <h1 class="site-header"><a href="https://www.weldiscleaning.com">Weldi's Cleaning</a></h1>
        <div id="header-empty-separator" class="site-header"></div>
        <div id="menu-icons" class="site-header">
            <h3 class="site-header" >HOME</h3>
            <h3 class="site-header" >SERVICES</h3>
            <h3 class="site-header" >SERVICE AREAS</h3>
            <h3 class="site-header" >BOOK ONLINE</h3>
        </div>
    </header>
    `;
  }
}
customElements.define("site-header", SiteHeader);

function modulo(a, b) {
    return ((a % b) + b) % b;
}

function slideshowButtonClick(slideshowName, slideClass, slideIndex, increment) {
    var slides = document.getElementsByClassName(slideClass);
    var slideshow = document.getElementById(slideshowName);
    var nextSlide = modulo(slideIndexes[slideIndex] + increment, slides.length);
    console.log(nextSlide);
    slideshow.style.backgroundImage = "url(" + slides[nextSlide].src + ")";
    slideIndexes[slideIndex] = nextSlide;
}