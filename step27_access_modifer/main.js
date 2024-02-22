"use strict";
// // Access modifer
// public        bdefault behaviour of property.
class Public {
    myName() {
        console.log("My name is AbdulRehman");
    }
}
// private  just class ke ander accessable hoga
let obj = new Public();
obj.myName();
console.log(obj.myName.name);
class Private {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let obj1 = new Private("AbdulRehman", 19);
console.log(obj1.name); // Error
// protected
// class and chield mn use kr sakte hn uske bahir nhi use kr sakte
class Protected {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class MyClass extends Protected {
    myName() {
        return `My name is ${this.name}`;
    }
    myage() {
        return `My age is ${this.age}`;
    }
}
let obj3 = new Protected("AbdulRehman", 19);
console.log(obj3.myName); // Error
