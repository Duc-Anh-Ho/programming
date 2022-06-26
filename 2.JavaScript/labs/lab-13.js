"use strict";

// Lap 13.1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();

// Lab 13.2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//Lab 13.3

const EV = function (make, speed, charge) {
  // Inheritance properties
  Car.call(this, make, speed);
  this.charge = charge;
};

// Inheritance __proto__
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeEnergy = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeEnergy(90);
console.log(tesla);

tesla.brake();
tesla.accelerate();

//Lab 13.4
class EVCl extends CarCl {
  #charge; //Private
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeEnergy(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
rivian.accelerate();
rivian.accelerate();
rivian.chargeEnergy(80);
rivian.accelerate();
rivian.brake();
rivian
  .accelerate()
  .brake()
  .brake()
  .brake()
  .brake()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake();
