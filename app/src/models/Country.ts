import { ICountry } from "./../interfaces/ICountry.js";
export class Country implements ICountry {
    constructor(
        public population: number,
        public region: string,
        public capital: string[],
        public name: string,
        public flag: string,
        public likes: number,
        public borders: string[]
    ) {}
}
