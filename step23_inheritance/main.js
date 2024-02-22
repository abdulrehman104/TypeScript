"use strict";
// // INHERITANCE
// class School {
//   schoolName: string;
//   constructor(SN: string) {
//     this.schoolName = SN;
//   }
// }
// class Teacher extends School {
//   teacherName1: string;
//   teacherName2: string;
//   teacherName3: string;
//   constructor(TN1: string, TN2: string, TN3: string) {
//     super("Piaic");
//     this.teacherName1 = TN1;
//     this.teacherName2 = TN2;
//     this.teacherName3 = TN3;
//   }
// }
// class Student extends Teacher {
//   studentName: string;
//   studentAge: number;
//   studentRollNumber: number;
//   constructor(SN: string, SA: number, SR: number) {
//     super("Hamzah", "Okasha", "Bilal");
//     this.studentName = SN;
//     this.studentAge = SA;
//     this.studentRollNumber = SR;
//   }
// }
// let school = new Student("AbdulRehman", 19, 12345);
// console.log(school);
// // OVERLOADING
// class Animal {
//   move() {
//     console.log("Moving along!");
//   }
// }
// class Dog extends Animal {
//   woof(times: number) {
//     for (let i = 0; i < times; i++) {
//       console.log("woof!");
//     }
//   }
// }
// const d = new Dog();
// // Base class method
// d.move();
// // Derived class method
// d.woof(3);
// OVERLOADING
class overload {
    firstoverload(a) {
        console.log("Hello Overload");
    }
}
let obj = new overload();
obj.firstoverload("");
obj.firstoverload(123);
obj.firstoverload(true);
// OVERRIDING METHOD
class Base {
    greet() {
        console.log("Hello, world!");
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("reader");
