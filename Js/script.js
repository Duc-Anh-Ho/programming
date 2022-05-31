"use strict";
//  use strict để báo lỗi những biến chưa khai báo hoặc nhưng biến bị trùng tên với biến mặc định

// const fName = `Duc Anh`;
// const introduce = `I'm ${fName}`;
// console.log(introduce);
// console.log(typeof "string");
// if (typeof fName == "String") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// const inputYear = "1995";
// console.log(Number(inputYear), inputYear);
// console.log(String(21), 21);
// console.log("test" + true);
// console.log(25 - "30");

// // const num = Number(prompt("TEST"));
// const num = 7;
// console.log(num);

// switch (num) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//   // break;
//   case 4:
//     console.log("four");
//   // break;
//   case 5:
//     console.log("five");
//     break;
// }

// num > 5 ? console.log(`${num} > 5`) : console.log(`${num} < 5`);

// const testNum = num > 5 ? "ok" : "ng";
// console.log(testNum);
// console.log(`${num > 5 ? `${num} > 5` : `${num} < 5`}`);

// // const bill = 430;
// // const tip = 300 >= bill && bill >= 50 ? (15 * bill) / 100 : (20 * bill) / 100;
// // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);

// // function myFunction(a, b) {
// //     const mySum = a + b;
// //     const mySubtract = a - b;
// //     return mySum;
// // }
// // console.log(myFunction(4, 5));

// function average(a, b, c) {
//   return (a + b + c) / 3;
// }
// //
// let dolphins = average(44, 23, 71);
// let koalas = average(65, 54, 49);

// dolphins = average(85, 54, 41);
// koalas = average(23, 34, 27);

// function checkWinner(avrDophins, avrKaolas) {
//   if (avrDophins >= 2 * avrKaolas) {
//     return `Dolphins win 🥇${avrDophins} vs. ${avrKaolas}`;
//   } else if (avrKaolas >= 2 * avrDophins) {
//     return `Kaolas win 🏆 ${avrKaolas} vs. ${avrDophins}`;
//   } else {
//     return `No team win!!`;
//   }
// }

// console.log(checkWinner(dolphins, koalas));
// //
// let testArray = [5, 6, 7];

// testArray = [1, 3];

// //
// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) return bill * 0.15;
//   else return bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// //
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schee",
//   birthyear: 1991,
//   job: "freelancer",
//   friends: ["Micheal", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2022 - this.birthyear;
//     return this.age;
//   },
//   getSumanry: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} Driver License.`;
//   },
// };

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
// );
// // console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSumanry());

// //
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(
//   `${mark.calcBMI() > john.calcBMI() ? mark.fullName : john.fullName}'s BMI (${
//     mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()
//   }) is higher than ${
//     mark.calcBMI() > john.calcBMI() ? john.fullName : mark.fullName
//   }'s (${mark.calcBMI() > john.calcBMI() ? john.calcBMI() : mark.calcBMI()})!`
// );

// //
// for (let i = 1; i == 0; i++) {
//   console.log(i);
// }
// //
// console.clear();
// //
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// secureBooking()();
// secureBooking()();
// secureBooking()();

// // Lap 13.1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is go ing at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is go ing at ${this.speed}km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.accelerate();

// // Lab 13.2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//     return this;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// //Lab 13.3

// const EV = function (make, speed, charge) {
//   // Inheritance properties
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Inheritance __proto__
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeEnergy = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV("Tesla", 120, 23);
// tesla.chargeEnergy(90);
// console.log(tesla);

// tesla.brake();
// tesla.accelerate();

// //Lab 13.4
// class EVCl extends CarCl {
//   #charge; //Private
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeEnergy(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed}km/h, with a charge of ${
//         this.#charge
//       }%`
//     );
//     return this;
//   }
// }

// const rivian = new EVCl("Rivian", 120, 23);
// rivian.accelerate();
// rivian.accelerate();
// rivian.chargeEnergy(80);
// rivian.accelerate();
// rivian.brake();
// rivian
//   .accelerate()
//   .brake()
//   .brake()
//   .brake()
//   .brake()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake();

// Lab 14.1

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderCountry = function (data, className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = "Something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥💥💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
