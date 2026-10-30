class DarkMode {
    constructor(buttonSelector, iconSelector) {
        this.button = document.querySelector(buttonSelector);
        this.icon = document.querySelector(iconSelector);
        this.darkClass = "dark-mode";
        this.storageKey = "rayan-portfolio-theme";

        this.handleClick = this.handleClick.bind(this);
    }

    applyTheme(isDark) {
        document.body.classList.toggle(this.darkClass, isDark);

        if (this.icon) {
            this.icon.classList.toggle("fa-moon", isDark);
            this.icon.classList.toggle("fa-sun", !isDark);
        }

        if (this.button) {
            this.button.setAttribute(
                "aria-label",
                isDark ? "Ativar modo claro" : "Ativar modo escuro"
            );
        }
    }

    handleClick() {
        const isCurrentlyDark = document.body.classList.contains(this.darkClass);
        const nextStateIsDark = !isCurrentlyDark;

        this.applyTheme(nextStateIsDark);
        localStorage.setItem(this.storageKey, nextStateIsDark ? "dark" : "light");
    }

    init() {
        const savedTheme = localStorage.getItem(this.storageKey);
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldStartDark = savedTheme ? savedTheme === "dark" : prefersDark;

        this.applyTheme(shouldStartDark);

        if (this.button) {
            this.button.addEventListener("click", this.handleClick);
        }
        return this;
    }
}

const darkmode = new DarkMode("#theme-toggle", "#icon");
darkmode.init();