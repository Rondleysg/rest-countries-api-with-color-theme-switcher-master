import { Country } from "../models/Country.js";
import { CountryController } from "./CountryController.js";

export class PageController {
    public countries: Country[];
    constructor() {
        this.setButtonDarkMode();
    }

    public async init() {
        this.countries = await CountryController.getCountries();
        this.filterForSearch(this.countries);
        this.setFirstCountries(this.countries);
        this.filterByRegion(this.countries);
    }

    private async filterForSearch(countries: Country[]) {
        const inputSearch = <HTMLInputElement>document.querySelector("#search");
        inputSearch.addEventListener("change", async () => {
            const countriesSearched = await CountryController.countriesByName(
                countries,
                inputSearch.value
            );
            CountryController.addCountries(countriesSearched);
        });
    }

    private async filterByRegion(countries: Country[]) {
        const select = <HTMLSelectElement>document.getElementById("filterRegion");
        select.addEventListener("change", async () => {
            const value = select.options[select.selectedIndex].value;
            const countriesFiltred = await CountryController.countriesByRegion(countries, value);
            CountryController.addCountries(countriesFiltred);
        });
    }

    private setButtonDarkMode() {
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

    private async setFirstCountries(countries: Country[]) {
        const countriesSorted: Country[] = await CountryController.getCountriesSortedByPopulation(
            this.countries
        );
        CountryController.addCountries(countriesSorted);
    }
}
