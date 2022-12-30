import { CountryController } from "./controllers/CountryController.js";
import { Country } from "./models/Country.js";

async function main() {
    const countries: Country[] = await CountryController.getCountriesSortedByPopulation();
    CountryController.addCountries(countries);
}

main();
