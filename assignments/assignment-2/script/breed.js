"use strict";

//-DEFINE-
const breedArr = getFromStorage("breedArr");
let breedRow;
let breedData;
let alertMassage = "";
const activeSideBar = document.querySelector("#sidebar");
const breedInput = document.querySelector("#input-breed");
const typeInput = document.querySelector("#input-type");
const tableBodyEl = document.querySelector("#tbody"); // table body
const submitBtn = document.querySelector("#submit-btn");
//-FUNCTION-
//Display breedArr to table (2-3)
function renderTableBreedData(data) {
  breedRow = document.createElement("tr");
  breedRow.innerHTML = `
  <th scope="row">${data.id}</th>
  <td>${data.breed}</td>
  <td>${data.type}</td>
  <td>
		<button class="btn btn-danger" onclick="deleteBreed(${data.id})">Delete</button>
	</td>
  `;
  tableBodyEl.appendChild(breedRow);
}
// Collect breed data (2-3)
function collectBreedData() {
  breedData = {
    breed: breedInput.value,
    type: typeInput.value,
  };
}
//Check invalid breed data (2-3)
function checkInvalidData() {
  for (let i = 0; i < breedArr.length; i++) {
    if (
      breedArr[i].breed === breedData.breed &&
      breedArr[i].type === breedData.type
    )
      alertMassage += "ID must unique!\n";
  }
  if (!breedData.breed) alertMassage += `Please input Breed\n`;
  if (breedData.type === "Select Type") alertMassage += `Please input Type\n`;
  if (alertMassage) {
    alert(alertMassage);
    alertMassage = "";
  } else {
    breedArr.push(breedData);
    breedArr.forEach((item, i) => (item.id = i + 1));
    saveToStorage("breedArr", breedArr);
    deleteInputBreedData();
  }
}
//Delete input breed data (2-3)
function deleteInputBreedData() {
  breedInput.value = "";
  typeInput.value = "Select Type";
}
//Delete old data in table (2-3)
function deleteTableData() {
  tableBodyEl.innerHTML = "";
}
//Add breed data to table (2-3)
function displayTableBreedData(array) {
  array.forEach((item, i) => renderTableBreedData(item));
}
function deleteBreed(breedId) {
  if (confirm(`Do you want to delete Breed No#${breedId}?`)) {
    breedArr.forEach((item, i) => {
      if (item.id === breedId) breedArr.splice(i, 1);
      //Delete old data in table (2-3)
      deleteTableData();
      displayTableBreedData(breedArr);
      saveToStorage("breedArr", breedArr); //Save to LocalStorage (2-2)
    });
  }
}
//-MAIN-
// Animation when click sidebar
activeSideBar.addEventListener("click", function (e) {
  // Check click on sidebar only
  if (e.target.contains(activeSideBar))
    activeSideBar.classList.toggle("active");
});
// Dispolay data in LocalStorage (2-3)
displayTableBreedData(breedArr);
//When press Submit Button (2-3)
submitBtn.addEventListener("click", function (e) {
  // Collect breed data (2-3)
  collectBreedData();
  //Check invalid breed data (2-3)
  checkInvalidData();
  //Delete old data in table (2-3)
  deleteTableData();
  //Add breed data to table (2-3)
  displayTableBreedData(breedArr);
});
