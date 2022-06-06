"use strict";

//-DEFINE-
let currentUser = getFromStorage("currentUser");

const loginContainer = document.querySelector("#login-modal");
const logoutContainer = document.querySelector("#main-content");
const welcomeMess = document.querySelector("#welcome-message");
const logoutBtn = document.querySelector("#btn-logout");

//-CLASS-
//-FUNCTION-
function checkCurrentUser() {
  currentUser = getFromStorage("currentUser");
  if (currentUser.length === 0) {
    logoutContainer.style.display = "none";
    loginContainer.style.display = "block";
  } else {
    welcomeMess.innerHTML = `Welcome ${currentUser[0].firstName}`;
    loginContainer.style.display = "none";
    logoutContainer.style.display = "block";
  }
}
// -MAIN-
checkCurrentUser();
logoutBtn.addEventListener("click", function (e) {
  deleteStorage("currentUser");
  checkCurrentUser();
});
