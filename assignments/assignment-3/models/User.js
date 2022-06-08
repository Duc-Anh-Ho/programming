"use strict";
//-CLASS-
class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
  save(saveTo) {
    saveTo.push({
      // Class Intance to Object
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    });
    saveToStorage("userArr", saveTo);
  }
}
