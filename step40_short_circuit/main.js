"use strict";
let a = "My name is abdulrehman";
let func = () => {
    console.log("Hello World");
};
a && func();
let b = 10;
let c = 16;
let func1 = () => {
    console.log("Hello World");
};
b === 10 && func1();
b === 10 && c === 16 && func1();
b === 10 || (c === 16 && func1());
b == 12 && func1;
