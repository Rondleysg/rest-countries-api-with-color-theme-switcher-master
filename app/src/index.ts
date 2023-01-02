import { PageController } from "./controllers/PageController.js";
import { CountryController } from "./controllers/CountryController.js";
import { Country } from "./models/Country.js";

async function main() {
    const pageController = new PageController();

    const countries: Country[] = await CountryController.getCountriesSortedByPopulation();
    CountryController.addCountries(countries);
}

main();
