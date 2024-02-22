"use strict";
// Implement the interface in a class
class Printer {
    print() {
        console.log("Printing...");
    }
}
// Create an instance of the class
const myPrinter = new Printer();
// Call the method defined in the interface
myPrinter.print();
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class Ball {
    // Class 'Ball' incorrectly implements interface 'Pingable'.
    //   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() {
        console.log("pong!");
    }
}
class MyClass {
    constructor(mN, mA, mI, H) {
        this.myName = mN;
        this.myAge = mA;
        this.myId = mI;
        this.hobbies = H;
    }
    myHobbies(val1) {
        this.hobbies = val1;
    }
}
let obj1 = new MyClass("AbdulRehman", 19, 12345, [
    "Programmer",
    "AI Specialist",
    "Web Developer",
]);
console.log(obj1);
obj1.hobbies = ["Programmer", "AI Specialist", "Web Developer"];
console.log(obj1.hobbies);
