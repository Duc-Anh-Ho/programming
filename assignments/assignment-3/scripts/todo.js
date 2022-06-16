"use strict";

//-DEFINE-
//Selectors
let alertMessage = "";
const taskInput = document.querySelector("#input-task");
const todoListContainer = document.querySelector("#todo-list");
const textTodoList = document.querySelector(".mb-4");
const addButton = document.querySelector("#btn-add");
const todoListInputContainer = document.querySelector("#todo-container");
//Variable
const currentUser = getFromStorage("currentUser")[0];
let taskArr = getFromStorage("taskArr");

// -FUNCTION-
//Function Declare
function deleteTodoData() {
  todoListContainer.innerHTML = "";
}
function checkLogin(user) {
  if (!user) {
    textTodoList.innerHTML = `Please <a href="./login.html">login</a> to see your Todo List!!!`;
    todoListInputContainer.innerHTML = "";
    return false;
  } else {
    return true;
  }
}
function userTasksArr() {
  if (!checkLogin(currentUser)) return;
  taskArr = getFromStorage("taskArr");
  if (taskArr.length === 0)
    taskArr.push({
      owner: currentUser.username,
      taskList: [],
    });
  let userTasksArr = [];
  let isOldUser;
  taskArr.forEach((item) => {
    if (item.owner === currentUser.username) {
      userTasksArr = item.taskList;
      isOldUser = true;
    }
  });
  if (!isOldUser) {
    taskArr.push({
      owner: currentUser.username,
      taskList: [],
    });
  }
  return userTasksArr;
}
function renderHtml(task, checked) {
  const taskID = task.replace(/\s/g, "").toLowerCase();
  const taskHDML = `
    <li ${checked ? 'class="checked"' : ""}onclick=toggleTask("${taskID}")>
      ${task}
      <span class="close" onclick=deleteTask('${taskID}')>
      ×
      </span>
    </li>`;
  return taskHDML;
}
function displayTodoListData() {
  deleteTodoData();
  if (!checkLogin(currentUser)) return;
  userTasksArr().forEach((item) => {
    todoListContainer.insertAdjacentHTML(
      "beforeend",
      renderHtml(item.taskName, item.isDone)
    );
  });
}
function checkInputTask(input) {
  // Check empty input task
  if (!input.trim()) alertMessage += "Please input your task title!!!";
  // Check duplicated task
  userTasksArr().forEach((item) => {
    if (
      item.taskName.replace(/\s/g, "").toLowerCase() ===
      input.replace(/\s/g, "").toLowerCase()
    )
      alertMessage += `Your input task is duplicated with task: \n"${item.taskName}"\nPlease input another!!!`;
  });
  //Display alert message
  if (alertMessage) {
    alert(alertMessage);
    alertMessage = "";
    return false;
  } else return true;
}
// Onclick functions
function toggleTask(task) {
  const currentTask = new Task(task, currentUser.username);
  userTasksArr().forEach((item) => {
    if (item.taskName.replace(/\s/g, "").toLowerCase() === task) {
      currentTask.toggle();
    }
  });
  displayTodoListData();
}
function deleteTask(task) {
  const currentTask = new Task(task, currentUser.username);
  userTasksArr().forEach((item) => {
    if (item.taskName.replace(/\s/g, "").toLowerCase() === task) {
      currentTask.delete();
    }
  });
}
// -MAIN-
displayTodoListData();
addButton.addEventListener("click", () => {
  taskArr = getFromStorage("taskArr"); //update again
  if (checkInputTask(taskInput.value)) {
    // Create new task
    const currentTask = new Task(taskInput.value, currentUser.username);
    currentTask.push();
    // Clear input box
    taskInput.value = "";
    // Display List
    displayTodoListData();
  }
});

// When press Enter key
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") addButton.click();
});
