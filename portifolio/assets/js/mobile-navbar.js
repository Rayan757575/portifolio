class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, backdrop) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.backdrop = document.querySelector(backdrop);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    animateLinks(isOpening) {
        this.navLinks.forEach((link, index) => {
            const delay = index / 7 + 0.15;
            link.style.animation = isOpening
                ? `navLinkFade 0.35s ease forwards ${delay}s`
                : "";
        });
    }

    setMenuState(isOpen) {
        this.navList.classList.toggle(this.activeClass, isOpen);
        this.mobileMenu.classList.toggle(this.activeClass, isOpen);

        if (this.backdrop) {
            this.backdrop.classList.toggle(this.activeClass, isOpen);
        }

        this.mobileMenu.setAttribute("aria-expanded", String(isOpen));
        this.mobileMenu.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
        );

        this.animateLinks(isOpen);
    }

    handleClick() {
        const isOpening = !this.navList.classList.contains(this.activeClass);
        this.setMenuState(isOpening);
    }

    closeMenu() {
        if (this.navList.classList.contains(this.activeClass)) {
            this.setMenuState(false);
        }
    }

    handleKeyDown(event) {
        if (event.key === "Escape" && this.navList.classList.contains(this.activeClass)) {
            this.closeMenu();
            this.mobileMenu.focus();
        }
    }

    init() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        if (this.backdrop) {
            this.backdrop.addEventListener("click", this.closeMenu);
        }

        this.navLinks.forEach((link) => {
            link.addEventListener("click", this.closeMenu);
        });

        document.addEventListener("keydown", this.handleKeyDown);

        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".menu-backdrop"
);
mobileNavbar.init();