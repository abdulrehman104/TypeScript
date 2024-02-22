"use strict";
// Example 01
let array = ["abdul", "rehman", "rashid", "haneef"];
let newArr = array.find((arr) => {
    // return arr == array[2]
    return arr == array[1];
});
// console.log(newArr);
// Example 02
let arr = [
    { name: "Abdul", age: 19 },
    { name: "Rehman", age: 13 },
    { name: "Rashid", age: 12 },
];
let newArrr = arr.filter((arr) => {
    return arr.name == "Abdul";
});
console.log(newArrr);
