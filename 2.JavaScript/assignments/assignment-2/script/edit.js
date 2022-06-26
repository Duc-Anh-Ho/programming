"use strict";

//-DEFINE-
const activeSideBar = document.querySelector("#sidebar");
const tableBodyEl = document.querySelector("#tbody"); // table body
const editTable = document.querySelector("#container-form");
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
const minAge = 1;
const maxAge = 15;
const minWeight = 1;
const maxWeight = 15;
const minLength = 1;
const maxLength = 100;
const dogIndex = 703;
const catIndex = 886;
let row;
let option;
let data;
let alertMassage = "";

//-FUNCTION-
function renderTableData(pet) {
  row = document.createElement("tr");
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
	<td>${pet.date}</td>
	<td>
		<button class="btn btn-warning" onclick="editPet('${pet.id}')">Edit</button>
	</td>
`;
  tableBodyEl.appendChild(row);
}

function displayTableData(array) {
  array.forEach((item) => renderTableData(item));
}

function renderTableBreedData(breed) {
  option = document.createElement("option");
  option.innerHTML = breed;
  return option;
}

function displayBreedData(breedArr) {
  breedArr.forEach((item) => {
    if (typeInput.value === item.type && breedInput.value !== item.breed) {
      breedInput.appendChild(renderTableBreedData(item.breed));
    }
  });
}

function displayEditTable() {
  editTable.classList.remove("hide");
}

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
  };
}
//Delete old data in table (2-6)
function deleteTableData() {
  tableBodyEl.innerHTML = "";
  // Hide Edit Form
  // editTable.classList.add("hide");
}
//update data to arrPet (2-6)
function updateEdittedPetArr(petID) {
  let tempArr = getFromStorage("petArr");
  tempArr.forEach((item) => {
    if (item.id === petID) {
      item.name = data.name;
      item.age = data.age;
      item.type = data.type;
      item.weight = data.weight;
      item.length = data.length;
      item.color = data.color;
      item.breed = data.breed;
      item.vaccinated = data.vaccinated;
      item.dewormed = data.dewormed;
      item.sterilized = data.sterilized;
      saveToStorage("petArr", tempArr);
    }
  });
}
function checkInvalidData() {
  // Check invalid data
  if (!data.name) alertMassage += `Please input Pet Name!\n`;
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
  if (alertMassage) {
    alert(alertMassage);
    alertMassage = "";
  } else {
    //update data to arrPet (2-6)
    updateEdittedPetArr(data.id);
  }
}
// When pess Edit Button (2-6)
function editPet(petID) {
  //Unhide edit table
  displayEditTable();
  // Display pet data
  getFromStorage("petArr").forEach((item) => {
    if (item.id === petID) {
      idInput.value = item.id;
      nameInput.value = item.name;
      ageInput.value = item.age;
      typeInput.value = item.type;
      weightInput.value = item.weight;
      lengthInput.value = item.length;
      colorInput.value = item.color;
      vaccinatedInput.checked = item.vaccinated;
      dewormedInput.checked = item.dewormed;
      sterilizedInput.checked = item.sterilized;
      //Delete "Select Breed" text
      breedInput.innerHTML = "";
      //Display current breed
      breedInput.appendChild(renderTableBreedData(item.breed));
    }
  });
  //Display the rest option breeds
  displayBreedData(getFromStorage("breedArr"));
}

//--MAIN--
// Animation when click sidebar
activeSideBar.addEventListener("click", function (e) {
  // Check click on sidebar only
  if (e.target.contains(activeSideBar))
    activeSideBar.classList.toggle("active");
});
//Display table (2-5)
displayTableData(getFromStorage("petArr"));
// When change Type (2-5)
typeInput.addEventListener("change", function (e) {
  breedInput.innerHTML = "<option>Select Breed</option>";
  displayBreedData(getFromStorage("breedArr"));
});
// When click submit button (2-5)
submitBtn.addEventListener("click", function (e) {
  //Collect data
  collectData();
  //Check data invalid
  checkInvalidData();
  //Delete old data in table
  deleteTableData();
  //Display table
  displayTableData(getFromStorage("petArr"));
});
