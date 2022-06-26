// Lab 2.1
const country = "Vietnam";
const continent = "Asia";
let population = "97,34m people";

const isIsland = false;
let language;

console.log (typeof isIsland )
console.log (typeof population);
console.log (typeof country);
console.log (typeof language);

// Lab 2.2
language = "Vietnamese"

// Lab 2.3
population = 90000000;
console.log (population / 2)
population ++;
console.log (population);
const finlandPopulation = 6000000;
console.log (population > finlandPopulation);
const avrPopulation = 33000000;
console.log (population < avrPopulation);

let desciption = country + "and its " + population + "million people speak " + language
console.log (desciption)

// Lab 2.4
desciption = `${country} and its ${population} million people speak ${language}`
console.log (desciption)

// Lab 2.5
if (population > avrPopulation) {
    console.log (`${country}'s population is above average`)
}else {
    console.log (`${country}'s population is ${avrPopulation - population} below average`)
}

// Lab 2.6.1
let heightMark = 1.69;
let weightMark = 78;
let heightJohn = 1.88;
let weightJohn = 95;

const BMIMark = weightMark/(heightMark**2)
const BMIJohn = weightJohn/(heightJohn**2)
const markHigherBMI = BMIMark > BMIJohn

console.log (BMIJohn, BMIMark)
console.log (markHigherBMI)

// Lab 2.6.2
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`)
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`)
}