"use strict";

//-DEFINE-
//Selectors
const taskInput = document.querySelector("#input-task");
const todoListContainer = document.querySelector("#todo-list");
const textTodoList = document.querySelector(".mb-4");
const addButton = document.querySelector("#btn-add");
const todoListInputContainer = document.querySelector("#todo-container");
//Variable
const currentUser = getFromStorage("currentUser");
const taskArr = getFromStorage("taskArr");
// -FUNCTION-
function deleteTodoData() {
  todoListContainer.innerHTML = "";
}
function checkLogin(user) {
  if (user.length === 0) {
    textTodoList.innerHTML = `Please <a href="./login.html">login</a> to see your Todo List!!!`;
    todoListInputContainer.innerHTML = "";
    return false;
  } else {
    return true;
  }
}
// -MAIN-
deleteTodoData();
if (checkLogin(currentUser)) {
  // taskArr.;
}
addButton.addEventListener("click", (e) => {
  if (taskInput.value.trim()) {
    console.log("OK", taskInput.value);
  } else {
    console.log("NG", taskInput.value);
  }
  // const newTask = new Task("taskInput.value")
});
