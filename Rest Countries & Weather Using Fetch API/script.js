const uri = "https://restcountries.com/v3.1/all";
const countriesContainer = document.getElementById("countries-container");
let countries = [];
const row = document.createElement("div");
row.setAttribute("class","row");

function handleSearch(target) {
  const search = target.value.toLowerCase();
  const searchMatch = countries.filter((element) => {
    const name = element.name.common.toLowerCase();
    return name.includes(search);
  });
  renderCards(searchMatch);
}

async function fetchData() {
  const response = await fetch(uri);
  const data = await response.json();
  console.log(data);
  if (data.length > 0) {
    countries = [...data];
    renderCards(countries);
  }
}
fetchData();
function renderCards(data = []) {
  // TRAVERSE THROIUGH DATA AND CREATE CARDS
  // NODES OF CARDS
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  // EXISTING VALUE ARE KICKED-OUT
  countriesContainer.innerHTML = "";
  // NEW CARDS ARE ALLOWED IN AND UI RE-RENDERED
  countriesContainer.append(row);
  row.append(...cards);
}

function createCard(data = {}) {
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let flag = document.createElement("img");
  let countryCapital = document.createElement("p");
  let countryRegion = document.createElement("p");
  let countryCode = document.createElement("p");
  let countryWeather = document.createElement("button")

  
  card.setAttribute("class", "countriesCard col-4");
  title.setAttribute("class", "country-card-header");
  flag.setAttribute("class", "flag-size");
  countryWeather.setAttribute("class", "btn btn-outline-light");

  const { name = "", flags="", capital = "", region="", cca3="" } = data;
  title.innerText = name["common"];
  flag.src = flags["png"];
  countryCapital.innerText = "Capital : " +capital;
  countryRegion.innerText = "Region : "+region;
  countryCode.innerText = "Country Code : "+cca3;
  countryWeather.innerText = "Click for weather"
  card.append(title, flag, countryCapital,countryRegion, countryCode, countryWeather);

  return card;
}