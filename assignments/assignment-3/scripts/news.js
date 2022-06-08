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

// // -FUNCTION-
// async function postData(url = "") {
//   const response = await fetch(url);
//   // return response;
//   const json = await response.json();
//   return json;
//   const articles = await json.articles;
//   // return articles;
//   const thing = await articles[0];
//   return thing;
// }

// // -MAIN-
// // console.log(postData(newsUrl));
// // console.log(postData(newsUrl[0]));
// // console.log(postData(newsUrl[1]));
// // console.log(postData(newsUrl[2]));
// const news = postData(newsUrl);
// console.log(news);
// // console.log(newsUrl);

const news2 = fetch(newsUrl)
  .then((res) => res.json())
  .then((act) => act.articles[0].author);
// .then((data) => data[0].author);
console.log(news2);
