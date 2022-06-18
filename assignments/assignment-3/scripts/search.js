"use strict";

// //-DEFINE-
// //Selectors
const textSearch = document.querySelector(".mb-4");
const searchContainer = document.querySelector("#main");
const pageNumberContainer = document.querySelector("#nav-page-num");
const textInput = document.querySelector("#input-query");
// //Variables
// -FUNCTION-
//Function Declare
function recycleScript(source) {
  console.log("s-async1");
  const recycleScript = document.createElement("script");
  recycleScript.type = "text/javascript";
  recycleScript.async = true;
  recycleScript.defer = true;
  recycleScript.src = source;
  recycleScript.onload = () => {
    console.log("s-Onload");
    callback();
  };
  document.querySelector("head").appendChild(recycleScript);
}
function callback() {
  console.log("s-async2");
  testF();
  searchMainScript();
}
// -MAIN-
console.log("s-Begin");
// Recycle code from news.js
recycleScript("../scripts/news.js");

function searchMainScript() {
  console.log("s-async3");
  if (checkLogin(currentUser)) {
    textSearch;
  }
}
