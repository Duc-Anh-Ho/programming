"use strict";

// Save data under LocalStorage
//-DEFINE-
let dataStorage;

// -FUNCTONS-
// Save to storage
function saveToStorage(key, value) {
  //Check browswer have Storage or not
  if (typeof Storage !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    alert("Your browser do not support localStorage!!!");
  }
}

// Get from storage
function getFromStorage(key) {
  // Check if 1st time don't have data yet
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}

// Delete storage
function deleteStorage(key) {
  localStorage.removeItem(key);
}
