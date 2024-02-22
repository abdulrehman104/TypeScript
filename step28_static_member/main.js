"use strict";
// class MyClass {
//   static x = 0;
//   static printX() {
//     console.log(MyClass.x);
//   }
// }
// let obj = new MyClass();
// MyClass.printX();
// console.log(MyClass.x);
// // obj.x; // ERROR
// // obj.printX; // ERROR
// // Static members are also inherited:
// class Base {
//   static getGreeting() {
//     return "Hello world";
//   }
// }
// class Derived extends Base {
//   myGreeting = Derived.getGreeting();
// }
// class S {
//   static name = "S!";
//   //   Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
// }
class User {
    constructor(name, age) {
        this.id = 0;
        this.id = ++User.generateID;
        this.name = name;
        this.age = age;
    }
}
User.generateID = 1;
let obj1 = new User("AbdulRehman", 19);
let obj2 = new User("Husnain", 17);
let obj3 = new User("Moiz", 19);
console.log(obj1);
console.log(obj2);
console.log(obj3);
