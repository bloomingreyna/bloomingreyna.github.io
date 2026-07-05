var aboutUsSlide = Object(0);
var slideIndexes = {aboutUs: aboutUsSlide};

class SiteHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <h1 class="site-header"><a href="https://www.weldiscleaning.com">Weldi's Cleaning</a></h1>
        <div id="header-empty-separator" class="site-header" style="min-width: 4rem"></div>
        <div id="menu-icons" class="site-header">
            <h3 class="site-header"><a href="/index.html" target="_self">HOME</a></h3>
            <h3 class="site-header"><a href="/Pages/services.html" target="_self">SERVICES</a></h3>
            <h3 class="site-header" >SERVICE AREAS</h3>
            <h3 class="site-header" >BOOK ONLINE</h3>
        </div>
        <img id="expand-menu-icon" class="site-header" src="/Images/chevchev.webp">
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