"use strict";

//-DEFINE-
let alertMessage = "";
const userArr = getFromStorage("userArr");
const registerBtn = document.querySelector("#btn-submit");
const passwordMinLength = 8;
const firstNameInput = document.querySelector("#input-firstname");
const lastNameInput = document.querySelector("#input-lastname");
const usernameInput = document.querySelector("#input-username");
const passwordInput = document.querySelector("#input-password");
const confirmPasswordInput = document.querySelector("#input-password-confirm");

//-FUNCTION-
function checkInvalidUser() {
  // Check duplicate username
  userArr.forEach((item, i) => {
    if (usernameInput.value === item.username)
      alertMessage += "Username already exists!\n";
  });
  // Check invalid input
  if (!firstNameInput.value) alertMessage += "Please Input First Name!\n";
  if (!lastNameInput.value) alertMessage += "Please Input Last Name!\n";
  if (!usernameInput.value) alertMessage += "Please Input Username!\n";
  if (!(passwordInput.value.length > passwordMinLength))
    alertMessage += "Password must be greater than 8 characters!\n";
  else if (passwordInput.value !== confirmPasswordInput.value)
    alertMessage += "Input Password Is Not Matching!\n";
  //Display alert message
  if (alertMessage) {
    alert(alertMessage);
    alertMessage = "";
    return false;
  } else return true;
}
//-MAIN-
// When click Register Button
registerBtn.addEventListener("click", function () {
  if (checkInvalidUser()) {
    const inputUser = new User(
      firstNameInput.value,
      lastNameInput.value,
      usernameInput.value,
      passwordInput.value
    );
    inputUser.save(userArr);
    // Move to login
    window.location.href = "../pages/login.html";
  }
});
// When press Enter Key
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") registerBtn.click();
});
