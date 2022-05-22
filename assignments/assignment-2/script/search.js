"use strict";

//-DEFINE-
const activeSideBar = document.querySelector("#sidebar");

// Animation when click sidebar
activeSideBar.addEventListener("click", function (e) {
  // Check click on sidebar only
  if (e.target.contains(activeSideBar))
    activeSideBar.classList.toggle("active");
});
