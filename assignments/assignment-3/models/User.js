"use strict";

//-DEFINE-

//-CLASS-
class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}
//-FUNCTION-

//-MAIN-
const test = new User("FN", "LS", "US", "PW");
