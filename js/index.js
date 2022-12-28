function getCountries(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function addCountrie(element) {
    countriesArea = document.getElementById("countries-area");
    divCountry = document.createElement("div");
    divCountry.classList.add("country-content");

    countryName = document.createElement("h1");
    nameText = document.createTextNode(element.name.common);
    countryName.appendChild(nameText);
    divCountry.appendChild(countryName);

    countryPop = document.createElement("h3");
    boldPop = document.createElement("b");
    popText = document.createTextNode(`Population: `);
    boldPop.appendChild(popText);
    countryPop.appendChild(boldPop);
    countryPop.appendChild(document.createTextNode(element.population.toLocaleString("pt-BR")));
    divCountry.appendChild(countryPop);

    countryReg = document.createElement("h3");
    boldReg = document.createElement("b");
    regText = document.createTextNode(`Region: `);
    boldReg.appendChild(regText);
    countryReg.appendChild(boldReg);
    countryReg.appendChild(document.createTextNode(element.region));
    divCountry.appendChild(countryReg);

    countryCap = document.createElement("h3");
    boldCap = document.createElement("b");
    CapText = document.createTextNode(`Capital: `);
    boldCap.appendChild(CapText);
    countryCap.appendChild(boldCap);
    countryCap.appendChild(document.createTextNode(element.capital[0]));
    divCountry.appendChild(countryCap);

    divCountry.style.backgroundImage = `url("${element.flags.png}")`;
    countriesArea.appendChild(divCountry);
}

function main() {
    countries = getCountries("https://restcountries.com/v3.1/all");
    countries = JSON.parse(countries);
    countries = countries.sort(function (a, b) {
        return a.population > b.population ? -1 : a.population < b.population ? 1 : 0;
    });
    countries = countries.slice(0, 8);

    countries.forEach((element) => {
        addCountrie(element);
        //console.log(element);
    });
}

main();
