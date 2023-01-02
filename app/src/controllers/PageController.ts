export class PageController {
    constructor() {
        const btnDarkMode = <HTMLElement>document.getElementById("darkmode-btn");
        btnDarkMode.onclick = this.toggleDarkMode;
    }
    private toggleDarkMode() {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
        }
    }
}
