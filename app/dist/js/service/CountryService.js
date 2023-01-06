var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Country } from "../models/Country.js";
export class CountryService {
    static getCountries() {
        return fetch("https://countries-api-esfl.onrender.com/countries")
            .then((r) => r.json())
            .then((data) => {
            return data.data.map((data) => {
                return new Country(data.population, data.region, data.capital, data.name, data.flag, data.likes, data.borders);
            });
        });
    }
    static likeCountry(country, like) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch("https://countries-api-esfl.onrender.com/countries/likes", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: country,
                    like: like,
                }),
            });
            return res.status;
        });
    }
}
