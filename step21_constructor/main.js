"use strict";
// EXAMPLE : Class with constructor
class Dreams {
    constructor(civic, dreamhouse, superbike) {
        this.buyCivic = civic;
        this.buyDreamHouse = dreamhouse;
        this.butSuperBike = superbike;
    }
}
let myDreams = new Dreams(1, 1, 2);
console.log(myDreams);
console.log(myDreams.buyCivic);
// CONSTRUCTOR WITH DEFAULT VALUE:
class Student {
    constructor(name = "AbdulRehman", Fathername = "Rashid", age = 19) {
        this.name = name;
        this.Fathername = Fathername;
        this.age = age;
    }
}
let student = new Student();
console.log(student);
// CONSTRUCTOR OVERLOADS:
class Person {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
let case1 = new Person("Abdul", "Rehman", "Rashid");
let case2 = new Person(17, 18, 19);
let case3 = new Person(true, false, true);
let case4 = new Person("AbduRehman", 19, true);
console.log(case1);
console.log(case2);
console.log(case3);
console.log(case4);
