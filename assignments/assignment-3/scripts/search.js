"use strict";

// //-DEFINE-
// //Selectors
const searchContainer = document.querySelector("#main");
const pageNumberContainer = document.querySelector("#nav-page-num");
const textInput = document.querySelector("#input-query");
const searchButton = document.querySelector("#btn-submit");
// //Variables
// -FUNCTION-
//Function Declare
function recycleScript(source) {
  // console.log("s-async1");
  const recycleScript = document.createElement("script");
  recycleScript.type = "text/javascript";
  recycleScript.async = true;
  recycleScript.defer = true;
  recycleScript.src = source;
  recycleScript.onload = () => {
    // console.log("s-Onload");
    callback();
  };
  document.querySelector("head").appendChild(recycleScript);
}
function callback() {
  // console.log("s-async2");
  // testF();
  // Initial Display
  if (!checkLogin(currentUser)) {
    searchContainer.style.display = "none";
  } else {
    newsContainer.style.display = "none";
    pageNumberContainer.style.display = "none";
  }
}
function checkInvalidInput() {
  let alertMessage = "";
  newsPage = 1;
  if (!textInput.value.trim()) alertMessage += "Please Input Search Key!\n";
  //Display alert message
  if (alertMessage) {
    alert(alertMessage);
    alertMessage = "";
    return false;
  } else {
    return true;
  }
}
// -MAIN-
// console.log("s-Begin");
// Recycle code from news.js
recycleScript("../scripts/news.js");
// When click submit button
searchButton.addEventListener("click", () => {
  if (checkInvalidInput()) {
    newsSearchKey = textInput.value;
    pullNewsdata(currentUser);
    newsContainer.style.display = "block";
    pageNumberContainer.style.display = "block";
  }
});
