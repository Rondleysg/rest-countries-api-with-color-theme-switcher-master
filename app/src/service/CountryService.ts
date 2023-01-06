import { ICountryRes } from "../interfaces/ICountryRes.js";
import { Country } from "../models/Country.js";

export class CountryService {
    static getCountries(): Promise<Country[]> {
        return fetch("https://countries-api-esfl.onrender.com/countries")
            .then((r) => r.json())
            .then((data: ICountryRes) => {
                return data.data.map((data) => {
                    return new Country(
                        data.population,
                        data.region,
                        data.capital,
                        data.name,
                        data.flag,
                        data.likes,
                        data.borders
                    );
                });
            });
    }

    static async likeCountry(country: string, like: number): Promise<number> {
        const res = await fetch("https://countries-api-esfl.onrender.com/countries/likes", {
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
    }
}
