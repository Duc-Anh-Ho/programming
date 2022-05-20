"use strict";

//-DEFINE-
//Define Variables
const petArr = getFromStorage("petArr"); //all pet be saved here.
let healthyPetArr = []; //healthy pet be saved here - use let becasue attach to filtered petArr
const minAge = 1;
const maxAge = 15;
const minWeight = 1;
const maxWeight = 15;
const minLength = 1;
const maxLength = 100;
const dogIndex = 703;
const catIndex = 886;
let row;
let data;
let alertMassage = "";
let healthyCheck = false;
//Define Selectors
const submitBtn = document.querySelector("#submit-btn");
const idInput = document.querySelector("#input-id");
const nameInput = document.querySelector("#input-name");
const ageInput = document.querySelector("#input-age");
const typeInput = document.querySelector("#input-type");
const weightInput = document.querySelector("#input-weight");
const lengthInput = document.querySelector("#input-length");
const colorInput = document.querySelector("#input-color-1");
const breedInput = document.querySelector("#input-breed");
const vaccinatedInput = document.querySelector("#input-vaccinated");
const dewormedInput = document.querySelector("#input-dewormed");
const sterilizedInput = document.querySelector("#input-sterilized");
const tableBodyEl = document.querySelector("#tbody"); // table body
const showBtn = document.querySelector("#healthy-btn");
const calcBMIBtn = document.querySelector("#calc-BMI-btn");
const activeSideBar = document.querySelector("#sidebar");

////////// -ASSIGNMENT 1-
//#region
//-FUNCTIONS-
//Collect pet data (2)
function collectData() {
  data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value), //Return parseInt (same same number)
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date().toLocaleDateString("en-US"),
  };
}
//Check invalid data (3)
function checkInvalidData() {
  // Check duplicate ID
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].id === data.id) alertMassage += "ID must unique!\n";
  }
  // Check invalid data
  if (!data.id) alertMassage += `Please input Pet ID!\n`;
  if (!data.age) alertMassage += `Please input Age!\n`;
  else if (!(data.age >= minAge && data.age <= maxAge))
    alertMassage += `Age must be between ${minAge} and ${maxAge}!\n`;
  if (data.breed === "Select Breed") alertMassage += `Please select Breed!\n`;
  if (data.type === "Select Type") alertMassage += `Please select Type!\n`;
  if (!data.weight) alertMassage += `Please input Weight!\n`;
  else if (!(data.weight >= minWeight && data.weight <= maxWeight))
    alertMassage += `Weight must be between ${minWeight} and ${maxWeight}!\n`;
  if (!data.length) alertMassage += `Please input Length!\n`;
  else if (!(data.length >= minLength && data.length <= maxLength))
    alertMassage += `Length must be between ${minLength} and ${maxLength}!\n`;
  //Display alert massagae (3)
  if (alertMassage) {
    alert(alertMassage);
    alertMassage = "";
  } else {
    petArr.push(data); //add data to arrPet (4)
    saveToStorage("petArr", petArr); //Save to LocalStorage (2-2)
    deleteInputData(); // delete input data (5)
  }
}
//Add data to table (4)
function displayTableData(array) {
  for (let i = 0; i < array.length; i++) {
    renderTableData(array[i]);
  }
}
//Delete old data in table (4)
function deleteTableData() {
  tableBodyEl.innerHTML = "";
}
//Display petArr to table (4.1)
function renderTableData(pet) {
  row = document.createElement("tr"); // create row for table
  // Add row content
  row.innerHTML = `
	<th scope="row">${pet.id}</th>
	<td>${pet.name}</td>
	<td>${pet.age}</td>
	<td>${pet.type}</td>
	<td>${pet.weight} kg</td>
	<td>${pet.length} cm</td>
	<td>${pet.breed}</td>
	<td>
		<i class="bi bi-square-fill" style="color: ${pet.color}"></i>
	</td>
	<td>
  <i class="${
    pet.vaccinated ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"
  }"></i>
  </td>
	<td>
    <i class="${
      pet.dewormed ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"
    }"></i>
  </td>
  <td>
    <i class="${
      pet.sterilized ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill"
    }"></i>
  </td>
  <td>
     <i id=pet-BMI-${pet.id}>?<i>
  </td>
	<td>${pet.date}</td>
	<td>
		<button class="btn btn-danger" onclick="deletePet('${pet.id}')">Delete</button>
	</td>
`;
  tableBodyEl.appendChild(row); // Add a row to table
}
//Delete input data (5)
function deleteInputData() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "#000000";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
  date: new Date();
}
// Delete pets - Run as click delete (onclick in html) (6)
function deletePet(petID) {
  if (confirm("Are you sure?")) {
    if (healthyCheck) {
      for (let i = 0; i < healthyPetArr.length; i++) {
        if (healthyPetArr[i].id === petID) {
          deleteTableData();
          healthyPetArr.splice(i, 1); ///***IMPORTANT: splice NOT slice
          displayTableData(healthyPetArr);
        }
      }
      // Delete this pet in petArr also
      for (let i = 0; i < petArr.length; i++) {
        if (petArr[i].id === petID) petArr.splice(i, 1);
      }
    } else {
      for (let i = 0; i < petArr.length; i++) {
        if (petArr[i].id === petID) {
          deleteTableData();
          petArr.splice(i, 1); ///***IMPORTANT: splice NOT slice
          displayTableData(petArr);
          saveToStorage("petArr", petArr); //Save to LocalStorage (2-2)
        }
      }
    }
  }
}
// Check Show Healthy
function checkHealthy() {
  // Soft healthy pets
  healthyPetArr = petArr.filter(
    (pet) => pet.vaccinated && pet.dewormed && pet.sterilized
  ); //Use let as assign array to array
}
// CalcBMI (8)
function calcBMI(type, weight, length) {
  if (type === "Dog")
    return (
      Math.round(((weight * dogIndex) / length ** 2) * 100) / 100
    ).toFixed(2); // Format and round 2 decimal
  if (type === "Cat")
    return (
      Math.round(((weight * catIndex) / length ** 2) * 100) / 100
    ).toFixed(2); // Format and round 2 decimal
}
//-MAIN-
// Delete old data in table
// deleteTableData();
// Dispolay data in LocalStorage (2-2)
displayTableData(petArr);
//When press Submit Button (1)
submitBtn.addEventListener("click", function (e) {
  //Collect data (2)
  collectData();
  //Check data invalid (3)
  checkInvalidData();
  // Delete old data in table (4)
  deleteTableData();
  // Add data to table(4)
  checkHealthy(); // Must check this first for case add new healthy pet when healthy check
  healthyCheck ? displayTableData(healthyPetArr) : displayTableData(petArr);
});
//When press Show Button (7)
showBtn.addEventListener("click", function (e) {
  checkHealthy();
  // Reverse button conditions
  healthyCheck = !healthyCheck;
  // Show healthy pets only
  if (healthyCheck) {
    showBtn.textContent = "Show All Pet";
    //Delate table and show healthy pets only
    deleteTableData();
    displayTableData(healthyPetArr);
  }
  // Show all pets
  else {
    showBtn.textContent = "Show Health Pet";
    //Delate table and show all pets
    deleteTableData();
    displayTableData(petArr);
  }
});
//When press BMI Button (8)
calcBMIBtn.addEventListener("click", function (e) {
  // Show healthy pets only
  if (healthyCheck) {
    for (let i = 0; i < healthyPetArr.length; i++) {
      const BMI = calcBMI(
        healthyPetArr[i].type,
        healthyPetArr[i].weight,
        healthyPetArr[i].length
      ); // temporary BMI
      document.querySelector(`#pet-BMI-${healthyPetArr[i].id}`).textContent =
        BMI;
    }
  }
  // Show all pets
  else {
    for (let i = 0; i < petArr.length; i++) {
      const BMI = calcBMI(petArr[i].type, petArr[i].weight, petArr[i].length); // temporary BMI
      document.querySelector(`#pet-BMI-${petArr[i].id}`).textContent = BMI;
    }
  }
});
//#endregion

////////// -ASSIGNMENT 2-
// Animation when click sidebar (2-1)
activeSideBar.addEventListener("click", function (e) {
  activeSideBar.classList.toggle("active");
});
