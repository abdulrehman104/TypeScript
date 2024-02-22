"use strict";
//Whenever you add a new property to a class, you need to include it as a parameter in the class constructor and assign its value in the constructor.
class UserAccount {
    constructor(name) {
        this.accountType = "user";
        this.name = name;
        // Note that this.email is not set
    }
}
// EXCLAMATION MARK (!):
class OKGreeter {
}
// When we add readonly to a property, that property will never be changed.
class Car {
    constructor(c, cn) {
        this.color = c;
        this.carname = cn;
    }
}
let car = new Car("Black", "Civic");
console.log(car);
// car.color = "white"           // ERROR
// car.carname = "supra"         // ERROR 
console.log(car);
