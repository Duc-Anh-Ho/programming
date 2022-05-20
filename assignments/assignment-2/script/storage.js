"use strict";
// Save data under LocalStorage
//-DEFINE-
let dataStorage;

// -FUNCTONS-
// Save to storage (2-2)
function saveToStorage(key, value) {
  //Check browswer have Storage or not
  if (typeof Storage !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    alert("Your browser do not support localStorage!!!");
  }
}

function getFromStorage(key) {
  // Check if 1st time don't have any pet yet
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}
