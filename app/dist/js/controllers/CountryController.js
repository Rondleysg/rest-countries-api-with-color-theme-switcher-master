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
        this.likeCountry();
    }
    static addCountry(element) {
        const countriesArea = document.getElementById("countries-area");
        const divCountry = document.createElement("div");
        const divInfoCountry = document.createElement("div");
        const divLikesCountry = document.createElement("div");
        const divContentCountry = document.createElement("div");
        divCountry.classList.add("country-content");
        const countryName = document.createElement("h1");
        const nameText = document.createTextNode(element.name);
        countryName.appendChild(nameText);
        divInfoCountry.appendChild(countryName);
        const countryPop = document.createElement("h3");
        const boldPop = document.createElement("b");
        const popText = document.createTextNode(`Population: `);
        boldPop.appendChild(popText);
        countryPop.appendChild(boldPop);
        countryPop.appendChild(document.createTextNode(element.population.toLocaleString("pt-BR")));
        divInfoCountry.appendChild(countryPop);
        const countryReg = document.createElement("h3");
        const boldReg = document.createElement("b");
        const regText = document.createTextNode(`Region: `);
        boldReg.appendChild(regText);
        countryReg.appendChild(boldReg);
        countryReg.appendChild(document.createTextNode(element.region));
        divInfoCountry.appendChild(countryReg);
        const countryCap = document.createElement("h3");
        const boldCap = document.createElement("b");
        const capText = document.createTextNode(`Capital: `);
        boldCap.appendChild(capText);
        countryCap.appendChild(boldCap);
        if (!element.capital) {
            element.capital = [""];
        }
        countryCap.appendChild(document.createTextNode(element.capital[0]));
        divInfoCountry.appendChild(countryCap);
        const likes = JSON.parse(localStorage.getItem("likes")) || [];
        const countryLiked = JSON.stringify({
            country: element.name,
        });
        const exists = likes.includes(countryLiked);
        if (exists) {
            divLikesCountry.innerHTML = `
            <button id=${element.name} like-button liked="true">
                <span class="material-icons material-icons-outlined liked">
                    favorite
                </span>
                <span>${element.likes}</span>
            </button>
        `;
        }
        else {
            divLikesCountry.innerHTML = `
            <button id=${element.name} like-button>
                <span class="material-icons material-icons-outlined">
                    favorite_border
                </span>
                <span>${element.likes}</span>
            </button>
        `;
        }
        divLikesCountry.classList.add("likes-country");
        divCountry.style.backgroundImage = `url("${element.flag}")`;
        divCountry.classList.add("element");
        divContentCountry.appendChild(divInfoCountry);
        divContentCountry.appendChild(divLikesCountry);
        divCountry.appendChild(divContentCountry);
        countriesArea.appendChild(divCountry);
    }
    static getCountriesSortedByPopulation(countries) {
        return __awaiter(this, void 0, void 0, function* () {
            const countriesSort = countries.sort(function (c1, c2) {
                return c1.population > c2.population ? -1 : c1.population < c2.population ? 1 : 0;
            });
            const firstCountries = countriesSort.slice(0, 8);
            return firstCountries;
        });
    }
    static likeCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            const buttons = document.querySelectorAll("[like-button]");
            buttons.forEach((btn) => {
                btn.addEventListener("click", (event) => {
                    const liked = btn.getAttribute("liked");
                    const likes = JSON.parse(localStorage.getItem("likes")) || [];
                    const countryLiked = JSON.stringify({
                        country: btn.id,
                    });
                    if (liked !== null) {
                        CountryService.likeCountry(btn.id, -1).then(() => __awaiter(this, void 0, void 0, function* () {
                            likes.splice(likes.indexOf(countryLiked), 1);
                            localStorage.setItem("likes", JSON.stringify(likes));
                            window.location.href = "/";
                        }));
                    }
                    else {
                        CountryService.likeCountry(btn.id, 1).then(() => __awaiter(this, void 0, void 0, function* () {
                            likes.push(countryLiked);
                            localStorage.setItem("likes", JSON.stringify(likes));
                            window.location.href = "/";
                        }));
                    }
                });
            });
        });
    }
    static getCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const countries = yield CountryService.getCountries();
            return countries;
        });
    }
    static clearCountries() {
        const countriesArea = document.getElementById("countries-area");
        countriesArea.innerHTML = "";
    }
    static countriesByName(countries, countryName) {
        return __awaiter(this, void 0, void 0, function* () {
            CountryController.clearCountries();
            if (!countryName || countryName == "" || countryName == " ") {
                return CountryController.getCountriesSortedByPopulation(countries);
            }
            const countriesFiltred = countries.filter((country) => {
                if (country.name.includes(countryName)) {
                    return country;
                }
            });
            return countriesFiltred;
        });
    }
    static countriesByRegion(countries, region) {
        return __awaiter(this, void 0, void 0, function* () {
            CountryController.clearCountries();
            if (!region || region == "" || region == " ") {
                return CountryController.getCountriesSortedByPopulation(countries);
            }
            const countriesFiltred = countries.filter((country) => {
                if (country.region.includes(region)) {
                    return country;
                }
            });
            return countriesFiltred;
        });
    }
}
