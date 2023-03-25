async function getAllCountries() {
  let countries = await fetch("https://restcountries.com/v3.1/all");
  let response = await countries.json();
  return response;
}

let container = document.querySelector(".container");
let country;

getAllCountries().then((el) => {
  country = el;
  country.forEach((element) => {
    createCountry(element);
    console.log(element);
  });
});

function createCountry(drzava) {
  let a = document.createElement("div");
  a.className = "nesto";

  let naziv = document.createElement("p");
  naziv.innerText = drzava.name.common;

  let zastava = document.createElement("img");
  zastava.src = drzava.flags.png;

  let glavniGr = document.createElement("p");
  glavniGr.innerText = "Capital: " + drzava.capital;

  let kontinent = document.createElement("p");
  kontinent.innerText = "Continent: " + drzava.region;

  a.appendChild(zastava);
  a.appendChild(naziv);
  a.appendChild(glavniGr);
  a.appendChild(kontinent);
  a.addEventListener("click", function () {
    window.location.href = "index1.html?country=" + drzava.name.common;
  });

  container.appendChild(a);
}

async function searchCountries(searchQuery) {
  let countries = await fetch(
    `https://restcountries.com/v3.1/name/${searchQuery}`
  );
  let response = await countries.json();
  return response;
}
document
  .querySelector("#search-button")
  .addEventListener("click", async function () {
    const searchInput = document.querySelector("#search-input");
    const searchQuery = searchInput.value.trim();
    if (!searchQuery) {
      container.innerHTML = "<p>You must enter a country name.</p>";
      return;
    }
    if (searchQuery) {
      container.innerHTML = "";
      const countries = await searchCountries(searchQuery);
      if (countries.length > 0) {
        countries.forEach((country) => {
          createCountry(country);
        });
      } else {
        container.innerHTML = "<p>No results found.</p>";
      }
    }
  });

document
  .querySelector("#search-input")
  .addEventListener("keypress", async function (event) {
    if (event.key === "Enter") {
      document.querySelector("#search-button").click();
    }
  });
