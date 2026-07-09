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
            <header class="site-header">
                <h1 class="site-header" style="margin-right: 1rem;"><a href="https://www.weldiscleaning.com">WELDI'S CLEANING</a></h1>
                <h2 class="site-header" style="color: ${this.checkPage(this.homePath) ? "white" : "auto"};"><a href="../Home/page.html">HOME</a></h2>
                <h2 class="site-header" style="color: ${this.checkPage(this.servicesPath) ? "white" : "auto"};"><a href="../Services/page.html">SERVICES</a></h2>
                <h2 class="site-header" style="color: ${this.checkPage(this.serviceAreasPath) ? "white" : "auto"};">SERVICE AREAS</h2>
                <h2 class="site-header" style="color: ${this.checkPage(this.bookOnlinePath) ? "white" : "auto"};">BOOK ONLINE</h2>
            </header>
        `;
    }
}
customElements.define("site-header", SiteHeader);