"use strict";
// EXAMPLE:  Class with constructor & method (function):
// lets create a class into dynamic way
class Showroom {
    constructor(c1, c2, c3, c4) {
        this.car1 = c1;
        this.car2 = c2;
        this.car3 = c3;
        this.car4 = c4;
    }
    supra() {
        console.log("The rate of the Toyota Supra is 1.53 crore Pakistani Rupees.");
    }
    civic() {
        console.log("The rate of the Civic 2023  9,899,000 Pakistani Rupees.");
    }
    Fortuner() {
        console.log("The rate of the Fortuner is 1.99 crore Pakistani Rupees.");
    }
    Landcruizer() {
        console.log("The rate of the Fortuner is 15.68 crore Pakistani Rupees.");
    }
}
let person1 = new Showroom("Supra mk5", "Civic2023", "Fortuner", "Landcruizer");
//   person1.car1 = "fortuner"  // ERROR (because value asssign with readonly modifier)
person1.civic();
console.log(`I want to buy this car ${person1.car2}`);
