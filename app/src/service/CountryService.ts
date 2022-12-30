import { Country } from "../models/Country.js";

export class CountryService {
    static getCountries(): Promise<Country[]> {
        return fetch("https://restcountries.com/v3.1/all")
            .then((r) => r.json())
            .then((data: Country[]) => {
                return data.map((data) => {
                    return new Country(
                        data.population,
                        data.region,
                        data.capital,
                        data.name,
                        data.flags
                    );
                });
            });
    }
}
