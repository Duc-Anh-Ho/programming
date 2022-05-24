"use strict";

//-DEFINE-
const activeSideBar = document.querySelector("#sidebar");
const idInput = document.querySelector("#input-id");
const nameInput = document.querySelector("#input-name");
const typeInput = document.querySelector("#input-type");
const breedInput = document.querySelector("#input-breed");
const vaccinatedInput = document.querySelector("#input-vaccinated");
const dewormedInput = document.querySelector("#input-dewormed");
const sterilizedInput = document.querySelector("#input-sterilized");
const tableBodyEl = document.querySelector("#tbody");
const findBtn = document.querySelector("#find-btn");
let row;
let option;
let searchArr = [];
const petArr = getFromStorage("petArr");
const breedArr = getFromStorage("breedArr");

//Add data to table
function displayTableData(array) {
  tableBodyEl.innerHTML = "";
  array.forEach((item) => renderTableData(item));
}
//Display search to table
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
`;
  tableBodyEl.appendChild(row);
}
function renderTableBreedData(breed) {
  option = document.createElement("option");
  option.innerHTML = breed;
  return option;
}
function displayBreedData(breedArr) {
  breedInput.innerHTML = "<option>Select Breed</option>";
  const tempArr = [];
  breedArr.forEach((item, i) => {
    if (!tempArr.includes(item.breed)) {
      breedInput.appendChild(renderTableBreedData(item.breed));
      tempArr.push(item.breed);
    }
  });
}
function searchPet() {
  searchArr = [];
  petArr.forEach((item) => {
    if (
      //Check text
      item.id.toUpperCase().indexOf(idInput.value.toUpperCase()) > -1 &&
      item.name.toUpperCase().indexOf(nameInput.value.toUpperCase()) > -1 &&
      //Check option
      (typeInput.value === item.type || typeInput.value === "Select Type") &&
      (breedInput.value === item.breed ||
        breedInput.value === "Select Breed") &&
      //Check ticked
      (vaccinatedInput.checked === item.vaccinated ||
        !vaccinatedInput.checked) &&
      (dewormedInput.checked === item.dewormed || !dewormedInput.checked) &&
      (sterilizedInput.checked === item.sterilized || !sterilizedInput.checked)
    ) {
      searchArr.push(item);
    }
  });
}
//-MAIN-
// Animation when click sidebar
activeSideBar.addEventListener("click", function (e) {
  // Check click on sidebar only
  if (e.target.contains(activeSideBar))
    activeSideBar.classList.toggle("active");
});
// Display all breed
displayBreedData(breedArr);
// When press find button
findBtn.addEventListener("click", function (e) {
  searchPet();
  displayTableData(searchArr);
});
