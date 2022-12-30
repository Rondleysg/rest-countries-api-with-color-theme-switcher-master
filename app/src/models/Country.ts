export class Country {
    constructor(
        public population: number,
        public region: string,
        public capital: string[],
        public name: {
            common: string;
        },
        public flags: {
            png: string;
            svg: string;
        }
    ) {}
}
