"use strict";

const showBtn = document.querySelector("#healthy-btn");

// Add CalculateBMI Button
const BMIBtn = document.createElement("button");
BMIBtn.type = "button";
BMIBtn.classList.add("btn", "btn-warning");
BMIBtn.id = "calc-BMI-btn";
BMIBtn.textContent = "Calculate BMI";
BMIBtn.style = "padding-left: 5px";
showBtn.after(BMIBtn);
const calcBMIBtn = document.querySelector("#calc-BMI-btn");
