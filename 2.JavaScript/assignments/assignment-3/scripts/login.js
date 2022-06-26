"use strict";

//-DEFINE-
let alertMessage = "";
let currentUser = getFromStorage("currentUser");
const userArr = getFromStorage("userArr");
const loginButton = document.querySelector("#btn-submit");
const usernameInput = document.querySelector("#input-username");
const passwordInput = document.querySelector("#input-password");

//-FUNCTION-
function checkInputUser() {
  let userExist = false;
  // Check empty input
  if (!usernameInput.value) {
    alertMessage += "Please Input Your Username!\n";
    userExist = true;
  }
  if (!passwordInput.value) {
    alertMessage += "Please Input Your Password!\n";
    userExist = true;
  }
  // Check assist user
  for (let i = 0; i < userArr.length; i++) {
    if (
      usernameInput.value === userArr[i].username &&
      passwordInput.value === userArr[i].password
    ) {
      //Save to storage
      currentUser.push(userArr[i]);
      saveToStorage("currentUser", currentUser);
      userExist = true;
      break;
    }
  }
  if (!userExist)
    alertMessage +=
      "Your Username or Password is incorrect.\nPlease try again!";
  // Display alert message
  if (alertMessage) {
    alert(alertMessage);
    alertMessage = "";
    return false;
  } else {
    userExist = false;
    return true;
  }
}
function checkNoCurrentUser() {
  currentUser = getFromStorage("currentUser");
  // Prevent access login if already have user
  if (!(currentUser.length === 0)) window.location.href = "../index.html";
  else return true;
}
//-MAIN-
// Check current user exist or not
checkNoCurrentUser();
// When click Login Button
loginButton.addEventListener("click", function (e) {
  if (checkInputUser()) checkNoCurrentUser();
});
// When press Enter Key
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") loginButton.click();
});
