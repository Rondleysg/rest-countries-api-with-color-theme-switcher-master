var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CountryService } from "../service/CountryService.js";
export class CountryController {
    static addCountries(countries) {
        countries.forEach((element) => {
            this.addCountry(element);
        });
    }
    static addCountry(element) {
        const countriesArea = document.getElementById("countries-area");
        const divCountry = document.createElement("div");
        divCountry.classList.add("country-content");
        const countryName = document.createElement("h1");
        const nameText = document.createTextNode(element.name.common);
        countryName.appendChild(nameText);
        divCountry.appendChild(countryName);
        const countryPop = document.createElement("h3");
        const boldPop = document.createElement("b");
        const popText = document.createTextNode(`Population: `);
        boldPop.appendChild(popText);
        countryPop.appendChild(boldPop);
        countryPop.appendChild(document.createTextNode(element.population.toLocaleString("pt-BR")));
        divCountry.appendChild(countryPop);
        const countryReg = document.createElement("h3");
        const boldReg = document.createElement("b");
        const regText = document.createTextNode(`Region: `);
        boldReg.appendChild(regText);
        countryReg.appendChild(boldReg);
        countryReg.appendChild(document.createTextNode(element.region));
        divCountry.appendChild(countryReg);
        const countryCap = document.createElement("h3");
        const boldCap = document.createElement("b");
        const capText = document.createTextNode(`Capital: `);
        boldCap.appendChild(capText);
        countryCap.appendChild(boldCap);
        countryCap.appendChild(document.createTextNode(element.capital[0]));
        divCountry.appendChild(countryCap);
        divCountry.style.backgroundImage = `url("${element.flags.png}")`;
        divCountry.classList.add("element");
        countriesArea.appendChild(divCountry);
    }
    static getCountriesSortedByPopulation() {
        return __awaiter(this, void 0, void 0, function* () {
            const countries = yield CountryService.getCountries();
            const countriesSort = countries.sort(function (c1, c2) {
                return c1.population > c2.population ? -1 : c1.population < c2.population ? 1 : 0;
            });
            const firstCountries = countriesSort.slice(0, 8);
            return firstCountries;
        });
    }
}
