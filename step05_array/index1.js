"use strict";
// ARRAY
let arr = ["ARehman", "Husnain", "Huzaifa", "Moiz"];
console.log(arr);
//FIND LENGHT
console.log(arr.length);
// FIND INDEX
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
// DEFINE ARRAY FROM DIFFERENT METHODS
// 1. BY NORMAL METHOD.
let arr1 = ["Abdul", "Rehman", "Rashid", "Hanif"];
console.log("array1", arr1);
// 2. BY CONSTRUCTOR.
let arr2 = new Array('abdul', "rehman");
console.log("array2", arr2);
// 3. BY ARRAY METHOD.
let arr3 = Array.of("Abdul", "Rehman", "Rashid", "Hanif");
console.log("array3", arr3);
// ARRAY: REMOVING, INTERESTING, AND EXTRACTING ELEMENTS.
// ARRAY METHODS
let arr4 = ["fareed", "lukman", "imran", "rehman"];
console.log(arr4);
// // POP METHOD
arr4.pop(); // pop method array se last element remove kr deta he
console.log(arr4); // array mn se element ko remove krke new array ko return kr dega
console.log(arr4.pop()); // array ka jo element remove hoga console krne pr remove element return kre ga
// PUSH METHOD
arr4.push("abdul"); // ham ne ak function bnaya usmn wo data pass keya jo array ke last mn store krna tha
console.log(arr4); // phr arr4 ko console krwa deya our abdul array ke end mn add ho gya
console.log(arr4.push("abdul")); // jo hamare new array bne he uske length btaye ga
// SHIFT METHOD
arr4.shift(); // shift method array ke first element ko remove kr dega
console.log(arr4); // array mn se element ko remove krke new array ko return kr dega
console.log(arr4.shift()); // array ke jo value shfit hoge usko print kr dega
// UNSHIFT METHOD
arr4.unshift("Hamza"); // ham ne ak function bnaya usmn wo data pass keya jo array ke start mn store krna tha
console.log(arr4); // phr arr4 ko console krwa deya our Hamza array ke start mn  mn add ho gya
console.log(arr4.unshift("Hamza")); // array ke length ko btaye ga
// Splicing and Slicing Arrays
// The slice method returns selected element in an array, as a new array.
// The slice method dose not change the orignal array.
// Return selected elements.
// only slice one element.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // [Orange,Lemon,Apple,Mango]
console.log(citrus);
let arr5 = ["Abdul", "Rehman", "Rashid", "Hassan", "Osaid", "MOIZ"];
let nerArray = arr5.slice(1, 3);
console.log("new array", nerArray);
console.log("orignam array", arr5);
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits.slice(1, 3); // [Orange,Lemon,Apple,Mango]
console.log(citrus);
// SPLICE
// • The splice () methods add and/or remove array elements.
// • The splice () overwrites the orignal array.
// • Return deleted elements in array.
let arr6 = ["Hamzah", "Atif", "Rashid", "Hassan", "Osaid", "MOIZ"];
// let deletedElement:string[] = arr6.splice(1,2,"abdul","rehman")
console.log(arr6);
arr6.splice(1, 2, "abdul", "rehman");
console.log(arr6);
// console.log(deletedElement);
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3);
fruits3.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits3);
console.log(fruits3[0]);
console.log(fruits3[1]);
console.log(fruits3[2]);
console.log(fruits3[3]);
