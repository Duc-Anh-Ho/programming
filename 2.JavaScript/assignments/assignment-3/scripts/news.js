"use strict";

//-DEFINE-
//Selectors
const previousButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
const pageNumber = document.querySelector("#page-num");
const newsContainer = document.querySelector("#news-container");
const textNews = document.querySelector(".mb-4");
//Variables
const currentUser = getFromStorage("currentUser");
const newsWeb = `https://newsapi.org/v2/`;
const newsAPI = "apiKey=" + "9d96b117656d4797a676584025563e2e"; // Main API
// const newsAPI = "apiKey=" + "d46449d487d74324a5d01c995cb8f408"; //one API limited 100 requests/day
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
//Empty Global Variables
let newsPage = 1;
let newsPerPage;
let newsSource;
let newsUrl;
let userNews;
let todayNews;
let newsSearchKey = "";
// -FUNCTION-
//Function Declare
function errorHandler(error) {
  // console.log("Error Catched:");
  console.error(error);
}
function displayPageNumber(number) {
  pageNumber.innerHTML = newsPage;
  //Check to display previous button
  number > 1
    ? (previousButton.style.display = "block")
    : (previousButton.style.display = "none");
}
function deleteNewsData() {
  newsContainer.innerHTML = "";
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
function displayNewsData(newsArticlesArr, newsPerPage = 5, currentPage = 1) {
  // Delete current news and display page number
  deleteNewsData();
  pageNumber.style.display = "block";
  // Define 1st page variable
  const firstArcticle = (currentPage - 1) * newsPerPage;
  // Check if don't have enough news display on 1 page
  if (newsArticlesArr.length > newsPerPage) {
    if (newsArticlesArr.length > currentPage * newsPerPage) {
      nextButton.style.display = "block";
    }
    if (newsArticlesArr.length === currentPage * newsPerPage) {
      nextButton.style.display = "none";
      previousButton.style.display = "block";
    }
    if (newsArticlesArr.length < currentPage * newsPerPage) {
      nextButton.style.display = "none";
      previousButton.style.display = "block";
      newsPerPage = newsArticlesArr.length - firstArcticle;
    }
  } else {
    nextButton.style.display = "none";
    newsPerPage = newsArticlesArr.length;
  }
  for (let i = firstArcticle; i < firstArcticle + newsPerPage; i++) {
    newsContainer.insertAdjacentHTML(
      "beforeend",
      renderHtml(newsArticlesArr[i])
    );
  }
  // console.log("n-Display");
}

function checkLogin(user) {
  nextButton.style.display = "none";
  previousButton.style.display = "none";
  pageNumber.style.display = "none";
  if (user.length === 0) {
    textNews.innerHTML = `Please <a href="./login.html">login</a> first!`;
    return false;
  } else {
    return true;
  }
}
//Asynchronous Function Declare
async function pullNewsdata(user) {
  try {
    // console.log("n-async1");
    newsSource = {
      // Default options
      countryDefault: `country=${newsCountry.US}&`,
      languageDefault: `language=${newsLanguage.English}&`,
      categoryDefault: `category=${newsCategory.general}&`,
      pageSizeDefault: `pageSize=${100}&`, // Take all ariticle from API at onetime _ Default: 20, Max: 100
      pageDefault: `page=${1}&`, // Don't use, cause fetch all articles at one
      // User settings
      categoryUser: `category=${currentUser[0].newsCategory}&`,
      searchKey: `q=${newsSearchKey}&`,
    };
    newsUrl =
      `${newsWeb}` + //Fixed
      `${newsEndpoint.topHeadLine}` + //Fixed
      `${newsSource.countryDefault}` + //Default
      `${newsSource.languageDefault}` + //Default
      `${newsSource.categoryUser}` + // User
      `${newsSource.pageSizeDefault}` + // Default
      `${newsSource.searchKey}` + // User
      `${newsAPI}`; //Fixed
    userNews = new News(user[0].username, newsUrl);
    newsPerPage = new Number(currentUser[0].newsPerPage);
    // Create news data from API
    todayNews = await userNews.init();
    // console.log("searchKey:", newsSource.searchKey);
    // Display default page after load *
    displayNewsData(todayNews.articles, newsPerPage);
  } catch (error) {
    // Errow Handler
    errorHandler(error);
  }
}

// -MAIN-
// console.log("n-Begin");
// Delete current news
deleteNewsData();
// Login check
if (checkLogin(currentUser)) {
  // Pull news data from newsAPi
  pullNewsdata(currentUser);
}
// When clicked next button
nextButton.addEventListener("click", function (e) {
  try {
    newsPage += 1;
    displayPageNumber(newsPage);
    // Display next page
    displayNewsData(todayNews.articles, newsPerPage, newsPage);
  } catch (error) {
    errorHandler(error);
  }
});
// When clicked previous button
previousButton.addEventListener("click", function (e) {
  try {
    newsPage -= 1;
    displayPageNumber(newsPage);
    // Display previous page
    displayNewsData(todayNews.articles, newsPerPage, newsPage);
  } catch (error) {
    errorHandler(error);
  }
});

// -TEST-
// document.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     console.log(newsUrl);
//     window.open(newsUrl, "_blank").focus();
//   }
// });
// function testF() {
//   console.log("n-Test");
// }
// console.log("n-End");
