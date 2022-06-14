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
    this.newsPerPage = "5"; //default news per page is 5
    this.newsCategory = "general"; //default news per page is 5
  }

  save(arr) {
    arr.push({
      // Class Intance to Object
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      newsPerPage: this.newsPerPage,
      newsCategory: this.newsCategory,
    });
    saveToStorage("userArr", arr);
  }
}
class News {
  constructor(username, url = defaultNewsUrl, API) {
    this.username = username;
    this.url = url;
    this.API = API;
  }
  async init() {
    // return await (await fetch(this.url)).json(); //Oneline fetch and json
    const response = await fetch(this.url);
    return await response.json();
  }
}

class Task {
  constructor(task, owner) {
    this.owner = owner;
    this.taskList = [{
      taskName: task,
      isDone: false, //Default is false
    }]; 
  }
  create(arr) {
    arr.push({
      owner: this.owner,
      taskList: this.taskList, 
    });
    saveToStorage("taskArr", arr);
  }
  update(arr) {
    const taskArr = getFromStorage("taskArr");
    taskArr.forEach((item) => {
      if (item.owner === this.owner) {
        item.taskList.push();
      }
    });
    saveToStorage("taskArr", arr);
  }
  toggle() {
    if (this.)
  }
}

