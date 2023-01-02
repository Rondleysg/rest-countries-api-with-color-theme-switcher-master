export class PageController {
    constructor() {
        const btnDarkMode = document.getElementById("darkmode-btn");
        btnDarkMode.onclick = this.toggleDarkMode;
    }
    toggleDarkMode() {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
        }
        else {
            document.body.classList.add("dark-mode");
        }
    }
}
