"use strict";

// Lab 14

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  console.log(data);
  console.log(data.flags.png);
  console.log(data.name.common);
  console.log(data.region);
  console.log(data.population);
  console.log(data.languages[Object.keys(data.languages)[0]]);
  console.log(data.currencies[Object.keys(data.currencies)].name);
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(2)}m people</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)[0]]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)].name
      }</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

////
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      // console.log(res);
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then((data) => {
      // console.log(data[0].name.common);
      renderCountry(data[0]);
    })
    .catch((err) => console.error(`${err.message} 💥💥💥`));
};
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
whereAmI(66.562, 33.821);
