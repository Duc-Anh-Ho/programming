`use strict`;

//Lab 4.1
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const vietnam = describeCountry("VietNam", 90, "Hanoi");
const thailand = describeCountry("Thailand", 70, "Bangkok");
const laos = describeCountry("Laos", 7.5, "Viangchan");
console.log(vietnam);
console.log(thailand);
console.log(laos);

//Lab 4.2
//Khai bao ham
function percentageOfWorld1(population) {
    return ((population / (7.9 * 100)) * 100);
}
console.log(percentageOfWorld1(1441))
console.log(percentageOfWorld1(90))
console.log(percentageOfWorld1(8))
//Bieu thuc ham
const percentageOfWorld2 = function (population) {
    return ((population / (7.9 * 100)) * 100);
}
console.log(percentageOfWorld2(1441))
console.log(percentageOfWorld2(90))
console.log(percentageOfWorld2(8))
//Lab 4.3 - Ham mui ten
const percentageOfWorld3 = population => (population / (7.9 * 100)) * 100;
console.log(percentageOfWorld3(1441))
console.log(percentageOfWorld3(90))
console.log(percentageOfWorld3(8))

//Lab 4.4 
const describePopulation = (country, population) => (`${country} has ${population} million people, which is about ${percentageOfWorld3(population)} of the world`);

console.log(describePopulation("China", 1441));
console.log(describePopulation("Vietnam", 90));
console.log(describePopulation("Laos", 7.4));

//Lab 4.5
const populations = [1441, 90, 70, 7.4]
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

//Lab 4.6
const neighbours = ["China", "Laos", "Thailand"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

console.log(neighbours.includes("Germany") ? 'Central European country' : 'Probably not a central European country :D');

console.log(neighbours.indexOf("Laos"));
neighbours[1] = "Cambodia";
console.log(neighbours);

//Lab 4.7.1

const calcAvarage = (point1, point2, point3) => (point1 + point2 + point3) / 3;

const checkWinner = (avgDolphins, avgKaolas) => {
    if (avgDolphins > avgKaolas * 2) return `Dolphins Win (${avgDolphins} vs. ${avgKaolas})`;
    else if (avgKaolas > avgDolphins * 2) return `Kaolas Win (${avgKaolas} vs. ${avgDolphins})`;
    else return ("No team win!");
}

console.log(checkWinner(calcAvarage(44, 23, 71), calcAvarage(65, 54, 49)));
console.log(checkWinner(calcAvarage(85, 54, 41), calcAvarage(23, 34, 27)));

//Lab 4.7.2

const calcTip = bill => (bill >= 30 && bill <= 300) ? bill * 0.15 : bill * 0.20;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
