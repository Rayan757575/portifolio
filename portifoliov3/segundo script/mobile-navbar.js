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
class DarkMode {
    constructor(icon) {
        this.icon = document.querySelector(icon);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    ChangeToDark(){
        document.body.style.setProperty('--background-main', '#171717');
        document.body.style.setProperty('--background-menu', '#121212');
        document.body.style.setProperty('--text-color', 'rgb(253, 249, 249)');
        document.body.style.setProperty('--span-color', '#4493f8');
        document.body.style.setProperty('--link-source-color', '#4493f8');
    }
    ChangeToLight(){
        document.body.style.setProperty('--background-main', ' #white');
        document.body.style.setProperty('--background-menu', '#f6f8fa'); 
        document.body.style.setProperty('--text-color', ' black');
        document.body.style.setProperty('--span-color', 'rgb(160, 0, 255)');
        document.body.style.setProperty('--link-source-color', 'rgb(160, 0, 255)');
    }

    handleClick() {
       if(this.icon.src == "../imagens/sun.png"){
            this.icon.src = "imagens/moon.png";
            this.ChangeToDark();
        }else{
            this.icon.src = "imagens/sun.png";
            this.ChangeToLight();
        }
    }

    init() {
        if (this.icon) {
            this.icon.addEventListener("click", this.handleClick);
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li")
const darkmode = new DarkMode(".icon")
mobileNavbar.init();
darkmode.init();
