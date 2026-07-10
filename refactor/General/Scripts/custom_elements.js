class SiteHeader extends HTMLElement {
    homePath = "/refactor/Home/page.html";
    servicesPath = "/refactor/Services/page.html";
    serviceAreasPath = "/refactor/Service_Areas/page.html";
    bookOnlinePath = "/refactor/Book_Online/page.html";

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
                <h2 class="site-header" style="color: ${this.checkPage(this.homePath) ? "white" : "auto"};"><a href="../Home/page.html">HOME</a></h2>
                <h2 class="site-header" style="color: ${this.checkPage(this.servicesPath) ? "white" : "auto"};"><a href="../Services/page.html">SERVICES</a></h2>
                <h2 class="site-header" style="color: ${this.checkPage(this.serviceAreasPath) ? "white" : "auto"};">SERVICE AREAS</h2>
                <h2 class="site-header" style="color: ${this.checkPage(this.bookOnlinePath) ? "white" : "auto"};">BOOK ONLINE</h2>
                <img class="site-header" src="../General/Images/chevchev.webp" alt="Menu dropdown">
            </header>
        `;
    }
}
customElements.define("site-header", SiteHeader);

class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="column-container" style="gap: 5px;">
                    <h1>SITE PAGES</h1>
                    <p><a href="">Home</a></p>
                    <p><a href="">Services</a></p>
                    <p><a href="">Service Areas</a></p>
                    <p><a href="">Book Online</a></p>
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