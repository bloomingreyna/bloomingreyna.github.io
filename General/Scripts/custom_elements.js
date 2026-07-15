class SiteHeader extends HTMLElement {
    homePath = "/index.html";
    servicesPath = "/docs/services.html";
    aboutUsPath = "/docs/about-us.html";
    bookOnlinePath = "/docs/book-online.html";

    constructor() {
        super();
    }

    checkPage(path) {
        if (window.location.pathname === path) {
            return true;
        }
        return false;
    }

    connectedCallback() {
        this.innerHTML = `
            <header id="site-header" class="site-header">
                <h1 class="site-header" style="margin-right: 1rem;"><a href="https://www.weldiscleaning.com">WELDI'S CLEANING</a></h1>
                <h2 class="site-header header-item" style="color: ${this.checkPage(this.homePath) ? "white" : "auto"};"><a href="/index.html">HOME</a></h2>
                <h2 class="site-header header-item" style="color: ${this.checkPage(this.aboutUsPath) ? "white" : "auto"};"><a href="/docs/about-us.html">ABOUT US</a></h2>
                <h2 class="site-header header-item" style="color: ${this.checkPage(this.servicesPath) ? "white" : "auto"};"><a href="/docs/services.html">SERVICES</a></h2>
                <h2 class="site-header header-item" style="color: ${this.checkPage(this.bookOnlinePath) ? "white" : "auto"};"><a href="/docs/book-online.html">BOOK ONLINE</a></h2>
                <img id="dropdown-arrow" class="site-header" src="../General/Images/hamburger.webp" alt="Menu dropdown">
            </header>
            <div id="dropdown-menu" class="floating-box">
                <div id="dropdown-hover-validation"></div>
                <h2 class="site-header" style="color: ${this.checkPage(this.homePath) ? "white" : "auto"};"><a href="/index.html">HOME</a></h2>
                <hr>
                <h2 class="site-header" style="color: ${this.checkPage(this.aboutUsPath) ? "white" : "auto"};"><a href="/docs/about-us.html">ABOUT US</a></h2>
                <hr>
                <h2 class="site-header" style="color: ${this.checkPage(this.servicesPath) ? "white" : "auto"};"><a href="/docs/services.html">SERVICES</a></h2>
                <hr>
                <h2 class="site-header" style="color: ${this.checkPage(this.bookOnlinePath) ? "white" : "auto"};"><a href="/docs/book-online.html">BOOK ONLINE</a></h2>
            </div>
        `;
    }
}
customElements.define("site-header", SiteHeader);

class Banner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="page-banner" style="background-image: linear-gradient(rgba(0, 0, 0, 0.35)), url(${this.getAttribute("data-image")});">
                <img class="banner-element banner-logo" src="../General/Images/weldigold.png" alt="Weldi's Cleaning logo">
                <div class="column-container banner-element" style="justify-content: center; align-items: center;">
                    <h1 class="banner-title">${this.getAttribute("data-title")}</h1>
                    <h2 class="banner-subtitle"><i>${this.getAttribute("data-subtitle")}</i></h2>
                </div>
            </section>
        `;
    }
}
customElements.define("site-banner", Banner);

class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="column-container" style="gap: 5px;">
                    <h1>SITE PAGES</h1>
                    <p><a href="/index.html">Home</a></p>
                    <p><a href="/docs/about-us.html">About Us</a></p>
                    <p><a href="/docs/services.html">Services</a></p>
                    <p><a href="/docs/book-online.html">Book Online</a></p>
                </div>

                <div class="column-container" style="gap: 5px;">
                    <h1>CONTACT US</h1>
                    <p><b>Phone: </b>(408) 621-9929</p>
                    <p><b>Email: </b>weldiscleaning@gmail.com</p>
                </div>
            </footer>
        `;
    }
}
customElements.define("site-footer", SiteFooter);

const dropdownArrow = document.getElementById("dropdown-arrow");
const headerItems = document.getElementsByClassName("header-item");

window.addEventListener("load", updateHeaderItems);
window.addEventListener("resize", updateHeaderItems);

const htmlFontSize = window.getComputedStyle(document.documentElement).fontSize;
function updateHeaderItems() {
    for (var i = 0; i < headerItems.length; i++) {
        const item = headerItems[i];
        item.style.display = "block";
    }

    for (var i = headerItems.length - 1; i >= 0; i--) {
        const item = headerItems[i];
        if (item.getBoundingClientRect().right > dropdownArrow.getBoundingClientRect().left - (parseInt(htmlFontSize.substring(0, htmlFontSize.length - 2)) + 1) * 1.25) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    }
}