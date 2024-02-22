"use strict";
//  Spread Operator
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// For Array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let updateArray = [...arr1, ...arr2];
console.log(updateArray);
// For Object
let std1 = {
    name: "AbdulRehman",
    age: 19,
    hobbies: ["Devops", "Data Scientist ", "Web Developer,"],
};
let std2 = Object.assign(Object.assign({}, std1), { name: "Rehman" });
console.log(std1);
console.log(std2);
//  Rest Operators
// EXAMPLE 01
function sum(a, b, ...otherNumber) {
    console.log(otherNumber);
    console.log(a + b);
    console.log(a + b + otherNumber[2]);
    console.log(a + b + otherNumber[3]);
    console.log(a + b + otherNumber[0]);
}
sum(5, 4, 3, 2, 1, 7, 3);
// EXAMPLE 02
let std = {
    name: "AbdulRehman",
    age: 19,
    hobbies: ["Devops", "Data Scientist ", "Web Developer,"],
    email: "abc@123",
    adress: "abc",
    totalNO: 500,
};
let rest = __rest(std, []);
console.log(rest);
console.log(rest.name);
