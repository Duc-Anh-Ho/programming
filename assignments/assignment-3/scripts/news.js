"use strict";

//-DEFINE-
//Define Selectors
const newsContainer = document.querySelector("#news-container");
//Define Variables
const currentUser = getFromStorage("currentUser");
const newsWeb = `https://newsapi.org/v2/`;
// const newsAPI = "9d96b117656d4797a676584025563e2e"; // Main API
const newsAPI = "d46449d487d74324a5d01c995cb8f408"; //1 API limited 100 requests/day
const newsEverything = `everything?`;
const newsTopHeadline = `top-headlines?`;
const newsCountry = {
  us: "us",
  ru: "ru",
};
const newsLanguage = {
  en: "en",
  ar: "ar",
  th: "th",
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
  country: `country=${newsCountry.us}&`,
  language: `language=${newsLanguage.en}&`,
  category: `category=${newsCategory.business}&`,
};
const newsPageSize = "pageSize=" + 10 + "&";
const newsPage = "page=" + 1 + "&";
const newsUrl =
  `${newsWeb}` +
  `${newsTopHeadline}` +
  `${newsSource.country}` +
  `${newsSource.category}` +
  `apiKey=${newsAPI}`;

const onePageDisplay = 5;
// -FUNCTION-
function deleteNewsData() {
  newsContainer.innerHTML = "";
}
function renderHtml(todayNews) {
  // todayNews.title = todayNews.articles[0].title;
  // todayNews.description = todayNews.articles[0].description;
  // todayNews.url = todayNews.articles[0].url;
  // todayNews.urlToImage = todayNews.articles[0].urlToImage;
  const newsHTML = `
    <div class="card flex-row flex-wrap">
      <div class="card mb-3" style="">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="${todayNews.urlToImage}"
              class="card-img"
              alt="${todayNews.title}"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                ${todayNews.title}
              </h5>
              <p class="card-text">
                ${todayNews.description}
              </p>
              <a
                href="${todayNews.url}"
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
function displayNewsData(newsArticlesArr, newsAmount = 5) {
  // Delete current news
  deleteNewsData();
  // Check if don't have enough news display on 1 page
  if (newsArticlesArr.length < newsAmount)
    newsAmount = newnewsArticlesArr.length;
  //renderHTML
  for (let i = 0; i < newsAmount; i++) {
    newsContainer.insertAdjacentHTML(
      "beforeend",
      renderHtml(newsArticlesArr[i])
    );
  }
}
// -MAIN-
const userNews = new News(currentUser[0].username, newsUrl, newsAPI);
//Anonymous Async Functions
(async () => {
  try {
    const todayNews = await userNews.init();
    displayNewsData(todayNews.articles, onePageDisplay);
  } catch (error) {
    console.error(error);
  }
})();
