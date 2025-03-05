class MobileNavbar {
    constructor(mobileMenu, navlist, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navlist);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            var tempo = (index / 6 + 0.3);
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards ' + tempo +'s');
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    init() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li")
mobileNavbar.init();
