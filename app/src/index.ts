import { PageController } from "./controllers/PageController.js";

async function main() {
    const pageController = new PageController();
    pageController.init();
}

main();
