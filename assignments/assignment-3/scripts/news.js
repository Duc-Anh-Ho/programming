"use strict";

//-DEFINE-
//Selectors
const previousButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
const pageNumber = document.querySelector("#page-num");
const newsContainer = document.querySelector("#news-container");
//Variables
const currentUser = getFromStorage("currentUser");
const newsWeb = `https://newsapi.org/v2/`;
// const newsAPI = "apiKey=" + "9d96b117656d4797a676584025563e2e"; // Main API
const newsAPI = "apiKey=" + "d46449d487d74324a5d01c995cb8f408"; //one API limited 100 requests/day
const newsEndpoint = {
  everything: `everything` + `?`,
  topHeadLine: `top-headlines` + `?`,
};
const newsCountry = {
  UAE: "ae",
  Argentina: "ar",
  Austria: "at",
  Australia: "au",
  Belgium: "be",
  Bulgaria: "bg",
  Brazil: "br",
  Canada: "ca",
  Switzerland: "ch",
  China: "cn",
  Colombia: "co",
  Cuba: "cu",
  Czech: "cz",
  Germany: "ce",
  Egypt: "eg",
  France: "fr",
  UK: "gb",
  Greece: "gr",
  HongKong: "hk",
  Hungary: "hu",
  Indonesia: "id",
  Ireland: "ie",
  Irsael: "il",
  Inadia: "in",
  Italy: "it",
  Japan: "jp",
  Korea: "kr",
  Lithuania: "lt",
  Latvia: "lv",
  Morocco: "ma",
  Mexico: "mx",
  Malaysia: "my",
  Nigeria: "ng",
  Netherlands: "nl",
  Norway: "no",
  NewZealand: "nz",
  Philippines: "ph",
  Poland: "pl",
  Portugal: "pt",
  Romania: "ro",
  Serbia: "rs",
  Russia: "ru",
  Arabia: "sa",
  Sweden: "se",
  Singapore: "sg",
  Slovenia: "si",
  Slovakia: "sk",
  Thailand: "th",
  Turkey: "tr",
  Taiwai: "tw",
  Ukraine: "ua",
  US: "us",
  Venezuela: "ve",
  Africa: "za",
};
const newsLanguage = {
  Arabic: "ar",
  Thai: "th",
  Arabic: "ar",
  German: "de",
  English: "en",
  Spanish: "es",
  French: "fr",
  Hebrew: "he",
  Italian: "it",
  Dutch: "nl",
  Norwegian: "no",
  Portuguese: "pt",
  Russian: "ru",
  Swedish: "sv",
  Chinese: "zh",
};
const newsCategory = {
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
  sports: "sports",
  technology: "technology",
};
const newsSource = {
  country: `country=${newsCountry.US}&`,
  language: `language=${newsLanguage.English}&`,
  category: `category=${newsCategory.science}&`,
  // pageSize: `pageSize=${newsPageSize}&`,
  // page: `page=${newsPage}&`,
};
const newsUrl =
  `${newsWeb}` + //Fixed
  `${newsEndpoint.topHeadLine}` + //Fixed
  `${newsSource.country}` +
  `${newsSource.language}` +
  `${newsSource.category}` +
  `${newsAPI}`; //Fixed
//Classes
const userNews = new News(currentUser[0].username, newsUrl, newsAPI);
//Empty Global Variables
let todayNews;
let newsPage = 1;
let newsPageSize = 5;
// -FUNCTION-
//Function Declare
function errorHandler(error) {
  console.log("Error Catched:");
  console.error(error);
}
function deleteNewsData() {
  newsContainer.innerHTML = "";
  // Hide prevous button
  previousButton.style.display = "none";
}
function renderHtml(newsArticles) {
  const newsHTML = `
    <div class="card flex-row flex-wrap">
      <div class="card mb-3" style="">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="${newsArticles.urlToImage}"
              class="card-img"
              alt="${newsArticles.title}"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                ${newsArticles.title}
              </h5>
              <p class="card-text">
               <!--${newsArticles.content}--!>
                ${newsArticles.description}
              </p>
              <a
                href="${newsArticles.url}"
                class="btn btn-primary"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  return newsHTML;
}
function displayNewsData(newsArticlesArr, onePageDisplay = 5) {
  // Delete current news
  deleteNewsData();
  // Check if don't have enough news display on 1 page
  if (newsArticlesArr.length < onePageDisplay)
    onePageDisplay = newsArticlesArr.length;
  //renderHTML
  for (let i = 0; i < onePageDisplay; i++) {
    newsContainer.insertAdjacentHTML(
      "beforeend",
      renderHtml(newsArticlesArr[i])
    );
  }
}
function displayPageNumber(number) {
  pageNumber.innerHTML = newsPage;
  //Check to display previous button
  number > 1
    ? (previousButton.style.display = "block")
    : (previousButton.style.display = "none");
}
//Asynchronous Function Declare
async function pullNewsdata() {
  try {
    // Create news data from API
    todayNews = await userNews.init();
    // Display default page after load
    displayNewsData(todayNews.articles, newsPageSize);
  } catch (error) {
    // Errow Handler
    errorHandler(error);
  }
}

// -MAIN-
// Delete current news
deleteNewsData();
// Pull news data from newsAPi
pullNewsdata();
// When clicked previous button
previousButton.addEventListener("click", function (e) {
  newsPage -= 1;
  displayPageNumber(newsPage);
});
// When clicked next button
nextButton.addEventListener("click", function (e) {
  newsPage += 1;
  displayPageNumber(newsPage);
});

// -TEST-
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log(newsUrl);
    window.open(newsUrl, "_blank").focus();
  }
});
