"use strict";

//-DEFINE-
//Selectors
const textSettings = document.querySelector(".mb-4");
const settingContainer = document.querySelector("#main");
const pageSizeInput = document.querySelector("#input-page-size");
const categoryInput = document.querySelector("#input-category");
const submitButton = document.querySelector("#btn-submit");
//Variable
const currentUser = getFromStorage("currentUser")[0];
const newsCategory = {
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
  sports: "sports",
  technology: "technology",
};
// -FUNCTION-
function checkLogin(user) {
  if (!user) {
    textSettings.innerHTML = `Please <a href="./login.html">login</a> first.`;
    settingContainer.innerHTML = "";
    return false;
  } else {
    return true;
  }
}
function renderCategoryHtml(currentCategory) {
  let categoryArr = Object.keys(newsCategory);
  // Find and move current to begin of array
  categoryArr.unshift(currentCategory);
  categoryArr = [...new Set(categoryArr)];
  let html = "";
  categoryArr.forEach((item) => {
    html += `<option>${item}</option>`;
  });
  return html;
}
function displayUserSetting() {
  if (!checkLogin(currentUser)) return;
  // Display current news per page
  pageSizeInput.value = currentUser.newsPerPage;
  // Display current news category
  categoryInput.innerHTML = renderCategoryHtml(currentUser.newsCategory);
  // Capitalize all options category
  categoryInput.style.textTransform = "capitalize";
}
function checkInvalidInput() {
  let alertMessage = "";
  if (pageSizeInput.value < 1)
    alertMessage += "Please in put number greater than 1!!!\n";
  // Display alert message
  if (!alertMessage) {
    alert(alertMessage);
    return false;
  } else return true;
}
// -MAIN-
displayUserSetting();
submitButton.addEventListener("click", (e) => {
  const numberInput = parseInt(pageSizeInput.value);
  const user = new User(currentUser.username);
  user.update(numberInput, categoryInput.value);
  // Move to news page
  window.location.href = "./news.html";
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") submitButton.click();
});
