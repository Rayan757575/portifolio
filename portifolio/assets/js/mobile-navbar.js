class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    animateLinks(isOpening) {
        this.navLinks.forEach((link, index) => {
            const delay = index / 6 + 0.2;
            link.style.animation = isOpening
                ? `navLinkFade 0.4s ease forwards ${delay}s`
                : "";
        });
    }

    handleClick() {
        const isOpening = !this.navList.classList.contains(this.activeClass);

        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.mobileMenu.setAttribute("aria-expanded", String(isOpening));
        this.animateLinks(isOpening);
    }

    closeMenu() {
        if (this.navList.classList.contains(this.activeClass)) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
            this.mobileMenu.setAttribute("aria-expanded", "false");
            this.animateLinks(false);
        }
    }

    init() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        this.navLinks.forEach((link) => {
            link.addEventListener("click", this.closeMenu);
        });

        return this;
    }
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();