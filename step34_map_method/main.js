"use strict";
// Map Method
// Map ak new array return krta he
// yeh empty array pr execute nhi krta
// map orignal array ko change nhi krta
// map 3 parameters leta he
// Example 01
let arr = [1, 2, 3];
let newArr = arr.map((item) => {
    return item;
});
console.log("OrignalArray:", arr);
console.log("newArray:", newArr);
// Example 02
let arr1 = [1, 2, 3];
let newArr1 = arr.map((item) => {
    return item + 10;
});
// console.log("OrignalArray:", arr1);
// console.log("newArray:", newArr1);
// Example 03
let arr3 = [112, 23, 32];
let duplicateArr = arr3.map((item, i, refer) => {
    return {
        elementVal: item,
        elementIndex: i,
        refrenceArray: refer,
    };
});
console.log("duplicateArray:", duplicateArr);
