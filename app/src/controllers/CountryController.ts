import { Country } from "../models/Country.js";
import { CountryService } from "../service/CountryService.js";

export class CountryController {
    static addCountries(countries: Country[]): void {
        countries.forEach((element: Country) => {
            this.addCountry(element);
        });
    }
    static addCountry(element: Country): void {
        const countriesArea: HTMLElement = <HTMLElement>document.getElementById("countries-area");
        const divCountry: HTMLDivElement = document.createElement("div");
        divCountry.classList.add("country-content");

        const countryName: HTMLHeadingElement = document.createElement("h1");
        const nameText: Text = document.createTextNode(element.name.common);
        countryName.appendChild(nameText);
        divCountry.appendChild(countryName);

        const countryPop: HTMLHeadingElement = document.createElement("h3");
        const boldPop: HTMLElement = document.createElement("b");
        const popText: Text = document.createTextNode(`Population: `);
        boldPop.appendChild(popText);
        countryPop.appendChild(boldPop);
        countryPop.appendChild(document.createTextNode(element.population.toLocaleString("pt-BR")));
        divCountry.appendChild(countryPop);

        const countryReg: HTMLHeadingElement = document.createElement("h3");
        const boldReg: HTMLElement = document.createElement("b");
        const regText: Text = document.createTextNode(`Region: `);
        boldReg.appendChild(regText);
        countryReg.appendChild(boldReg);
        countryReg.appendChild(document.createTextNode(element.region));
        divCountry.appendChild(countryReg);

        const countryCap: HTMLHeadingElement = document.createElement("h3");
        const boldCap: HTMLElement = document.createElement("b");
        const capText: Text = document.createTextNode(`Capital: `);
        boldCap.appendChild(capText);
        countryCap.appendChild(boldCap);
        countryCap.appendChild(document.createTextNode(element.capital[0]));
        divCountry.appendChild(countryCap);

        divCountry.style.backgroundImage = `url("${element.flags.png}")`;
        divCountry.classList.add("element");
        countriesArea.appendChild(divCountry);
    }

    static async getCountriesSortedByPopulation(): Promise<Country[]> {
        const countries = await CountryService.getCountries();
        const countriesSort: Country[] = countries.sort(function (c1: Country, c2: Country) {
            return c1.population > c2.population ? -1 : c1.population < c2.population ? 1 : 0;
        });
        const firstCountries: Country[] = countriesSort.slice(0, 8);
        return firstCountries;
    }
}
