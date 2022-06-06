"use strict";

//-DEFINE-
let alertMessage = "";
const userArr = getFromStorage("userArr");
const registerBtn = document.querySelector("#btn-submit");
const passwordMinLength = 8;
const firstNameInput = document.querySelector("#input-firstname");
const lastNameInput = document.querySelector("#input-lastname");
const userNameInput = document.querySelector("#input-username");
const passwordInput = document.querySelector("#input-password");
const confirmPasswordInput = document.querySelector("#input-password-confirm");

//-CLASS-
class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
  save() {
    console.log("FN:", this.firstName);
    console.log("LN:", this.lastName);
    console.log("UN:", this.username);
    console.log("PW:", this.password);
    userArr.push(this);
  }
}

//-FUNCTION-
function checkInvalidUser() {
  // Check invalid input
  if (!firstNameInput.value) alertMessage += "Please Input First Name!\n";
  if (!lastNameInput.value) alertMessage += "Please Input Last Name!\n";
  if (!userNameInput.value) alertMessage += "Please Input User Name!\n";
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
registerBtn.addEventListener("click", function (e) {
  // console.log(checkInvalidUser());
  const inputUser = new User(
    firstNameInput.value,
    lastNameInput.value,
    userNameInput.value,
    passwordInput.value
  );
  inputUser.save();
  // // Move page
  // window.location.href = "../pages/login.html";
  // Test
  function parseUser(userData) {
    const user = new User(
      userData.firstName,
      userData.lastName,
      userData.username,
      userData.password
    );
    return user;
  }
  const testP = parseUser(inputUser);
  console.log(testP);
  console.log(inputUser);
});
