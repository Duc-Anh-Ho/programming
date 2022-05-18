"use strict";

//-DEFINE-
const activeSideBar = document.querySelector("#sidebar");

// Animation when click sidebar
activeSideBar.addEventListener("click", function (e) {
  activeSideBar.classList.toggle("active");
});
