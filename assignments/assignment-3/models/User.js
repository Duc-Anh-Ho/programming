"use strict";
//-DEFINE-
// Dafault for testing
const defaultNewsUrl =
  // "https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=3&apiKey=9d96b117656d4797a676584025563e2e";
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d96b117656d4797a676584025563e2e";
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

class News extends User {
  constructor(username, url = defaultNewsUrl, API) {
    super(undefined, undefined, username); //Skip fName and lName)
    this.url = url;
    this.API = API;
  }

  async init() {
    // return await (await fetch(this.url)).json(); //Oneline fetch and json
    const response = await fetch(this.url);
    return await response.json();
  }
}
