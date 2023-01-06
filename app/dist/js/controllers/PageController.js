var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CountryController } from "./CountryController.js";
export class PageController {
    constructor() {
        this.setButtonDarkMode();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.countries = yield CountryController.getCountries();
            this.filterForSearch();
            this.setFirstCountries();
            this.filterByRegion();
        });
    }
    filterForSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            const inputSearch = document.querySelector("#search");
            inputSearch.addEventListener("change", () => __awaiter(this, void 0, void 0, function* () {
                const countriesSearched = yield CountryController.countriesByName(this.countries, inputSearch.value);
                CountryController.addCountries(countriesSearched);
            }));
        });
    }
    filterByRegion() {
        return __awaiter(this, void 0, void 0, function* () {
            const select = document.getElementById("filterRegion");
            select.addEventListener("change", () => __awaiter(this, void 0, void 0, function* () {
                const value = select.options[select.selectedIndex].value;
                const countriesFiltred = yield CountryController.countriesByRegion(this.countries, value);
                CountryController.addCountries(countriesFiltred);
            }));
        });
    }
    setButtonDarkMode() {
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
    setFirstCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const countriesSorted = yield CountryController.getCountriesSortedByPopulation(this.countries);
            CountryController.addCountries(countriesSorted);
        });
    }
}
