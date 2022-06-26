`use strict`;

//lab 5.1

const myCountry = {
    country: "Vietnam",
    capital: "Hanoi",
    language: "Vietnamese",
    population: 90,
    isIsland: Boolean,
    neighbours: ["China", "Lao", "Thailand"],
    describe: function () {
        console.log((`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`))  //lab 5.3.1
    },
    checkIsland: function (){
        this.neighbours.length !== 0 ? this.isIsland = true : this.isIsland = false;
        return this.isIsland;
    } //lab 5.3.3
}
//Lab 5.2.1
console.log (`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

//Lab 5.2.2
myCountry.population += 2;
console.log (myCountry.population);
myCountry["population"] -=2;
console.log (myCountry.population);

//Lab 5.3.2
myCountry.describe();

//Lab 5.3.3
console.log (myCountry.checkIsland());
console.log (myCountry.isIsland);

//Lab 5.4
for (let i = 1; i<=50; i++){
    console.log(`Voter number ${i} is currently voting`)
}

//Lab 5.5
const populations = [1441, 90, 70, 7.4];
const percentages2 = [];
function percentageOfWorld1(population) {
    return ((population / (7.9 * 100)) * 100);
}
for (let i = 0; i< populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log (percentages2)

//Lab 5.6
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]
for (let i = 0; i<listOfNeighbours.length; i++){
    for (let j = 0; j<listOfNeighbours[i].length;j++){
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

//Lab 5.7
const percentages3 = [];
let i = 0;
while (i <populations.length){
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log (percentages3);

//Lab 5.8.1
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

console.log(`${mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName}'s BMI (${mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()}) is higher than ${mark.calcBMI() > john.calcBMI() ? john.fullName : mark.fullName}'s (${mark.calcBMI() > john.calcBMI() ? john.calcBMI() : mark.calcBMI()})!`);

// Lab 5.8.2
const calcTip = bill => bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function  (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));