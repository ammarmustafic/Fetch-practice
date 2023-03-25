let params = new URLSearchParams(window.location.search);
let countryName = params.get("country");

async function getCountryData() {
  let response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  let data = await response.json();
  return data[0];
}

async function displayCountryData() {
  const container = document.querySelector("#container");
  let countryData = await getCountryData();

  let zastava = document.createElement("img");
  zastava.src = countryData.flags.png;
  container.appendChild(zastava);

  let naziv = document.createElement("p");
  naziv.innerText = "Name: " + countryData.name.common;
  container.appendChild(naziv);

  let glavniGr = document.createElement("p");
  glavniGr.innerText = "Capital: " + countryData.capital;
  container.appendChild(glavniGr);

  let kontinent = document.createElement("p");
  kontinent.innerText = "Continent: " + countryData.continents;
  container.appendChild(kontinent);

  let languages = document.createElement("p");
  languages.innerText =
    "Languages: " + Object.values(countryData.languages).join(", ");
  container.appendChild(languages);

  let population = document.createElement("p");
  population.innerText = "Population: " + countryData.population;
  container.appendChild(population);

  let subregion = document.createElement("p");
  subregion.innerText = "Subregion: " + countryData.subregion;
  container.appendChild(subregion);

  let timezone = document.createElement("p");
  timezone.innerText = "Timezone: " + countryData.timezones;
  container.appendChild(timezone);

  let borders = document.createElement("p");
  if (countryData.borders) {
    borders.innerText = "Borders: " + countryData.borders.join(", ");
  } else {
    borders.innerText = "Borders: None";
  }
  container.appendChild(borders);

  let currency = document.createElement("p");
  currency.innerText =
    "Currency: " + Object.values(countryData.currencies)[0].name;

  container.appendChild(currency);
}
const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", function () {
  history.back();
});
displayCountryData();
