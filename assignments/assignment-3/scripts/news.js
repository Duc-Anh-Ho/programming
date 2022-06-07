"use strict";

//-DEFINE-
const newsAPI = "9d96b117656d4797a676584025563e2e";
const newsEverything = `everything?`;
const newsTopHeadline = `top-headlines?`;
const newsCountryCode = "us";
const newsCountry = `country=${newsCountryCode}&`;
const newsUrl =
  `https://newsapi.org/v2/` +
  `${newsTopHeadline}` +
  `${newsCountry}` +
  `apiKey=${newsAPI}`;
//-CLASS-
//-FUNCTION-
async function postData(url = "") {
  const response = await fetch(url);
  return response.json();
}
// -MAIN-
console.log(fetch(newsUrl));
console.log(postData(newsUrl));
console.log(postData(newsUrl).then((a) => a.articles));
