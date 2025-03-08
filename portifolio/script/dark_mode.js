
class DarkMode {
    constructor(icon) {
        this.icon = document.getElementById("icon");
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    ChangeToDark() {
        document.body.style.setProperty('--background-main', '#171717');
        document.body.style.setProperty('--background-menu', '#121212');
        document.body.style.setProperty('--text-color', 'white');
        document.body.style.setProperty('--span-color', 'rgb(209 91 226)');
        document.body.style.setProperty('--link-source-color', 'rgb(209 91 226)');
    }
    ChangeToLight() {
        document.body.style.setProperty('--background-main', ' #white');
        document.body.style.setProperty('--background-menu', '#f6f8fa');
        document.body.style.setProperty('--text-color', ' black');
        document.body.style.setProperty('--span-color', 'rgb(160, 0, 255)');
        document.body.style.setProperty('--link-source-color', 'rgb(160, 0, 255)');
    }

    handleClick() {
        if (this.icon.classList.contains("fa-sun")) {
            this.ChangeToDark();
            this.icon.classList.replace("fa-sun", "fa-moon")
        } else {
            this.ChangeToLight();
            this.icon.classList.replace("fa-moon", "fa-sun")
        }
    }

    init() {
        if (this.icon) {
            this.icon.addEventListener("click", this.handleClick);
        }
        return this;
    }
}
const darkmode = new DarkMode("#icon")
darkmode.init();
