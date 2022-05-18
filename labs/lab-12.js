"use strict";

// Lab 12.1
console.log("---LAB 12.1---");
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i] >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogs[i]} years old`
      );
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy, and is ${dogs[i]} years old`
      );
    }
  }
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Lab 12.2
console.log("---LAB 12.2---");
const calcAverageHumanAge = function (dogsAges) {
  const humanAges = dogsAges.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const adults = humanAges.filter((humanAge) => humanAge >= 18);
  const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
  console.log(humanAges);
  console.log(adults);
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Lab 12.3
console.log("---LAB 12.3---");
const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
