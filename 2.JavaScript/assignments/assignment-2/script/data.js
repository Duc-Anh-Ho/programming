"use strict";
//-DEFINE-
const activeSideBar = document.querySelector("#sidebar");
const exportBtn = document.querySelector("#export-btn");
const importBtn = document.querySelector("#import-btn");
const fileInput = document.querySelector("#input-file");
const petArr = getFromStorage("petArr");
const scriptLink = "http://cdn.jsdelivr.net/g/filesaver.js";
let importtedPetArr = [];

// FileSaver Library
// -FUNCTIONS -
function loadFileSaverScript(src) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  // Onload to run after undefied function *
  // script.onreadystatechange = saveDataToFile ;
  // script.onload = saveDataToFile ;
  document.querySelector("body").appendChild(script);
}

function saveDataToFile() {
  const setFile = new Blob([JSON.stringify(petArr)], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(setFile, "Pets_list.JSON");
}

function loadDataFromFile() {
  const getFile = new FileReader();
  if (fileInput.files[0]) {
    getFile.readAsText(fileInput.files[0], "UTF-8");
    getFile.onload = function (e) {
      try {
        importtedPetArr = JSON.parse(getFile.result);
        //Merge import data with current data
        mergeData(importtedPetArr, petArr);
        alert("Import Successfully!");
      } catch (err) {
        alert(`Error!!!!\n${err}`);
      }
    };
    // Error loading
    getFile.onerror = function (e) {
      alert("Error loading JSON file!!!");
    };
  } else alert("Please select .JSON file");
}

function mergeData(fromArr, toArr) {
  fromArr.forEach((newItem) => {
    //Update duplicate ID
    const index = toArr.findIndex((oldItem) => oldItem.id === newItem.id);
    if (index > -1) {
      toArr.splice(index, 1, newItem);
    } else toArr.push(newItem); //Add the rest value
  });
  saveToStorage("petArr", toArr); //Save to local
}

//--MAIN--
// Animation when click sidebar
activeSideBar.addEventListener("click", function (e) {
  // Check click on sidebar only
  if (e.target.contains(activeSideBar))
    activeSideBar.classList.toggle("active");
});
// Add Script to html by javascript
loadFileSaverScript(scriptLink);
// When click export button
exportBtn.addEventListener("click", saveDataToFile);
// When click import button
importBtn.addEventListener("click", loadDataFromFile);
