"use strict";
// FUNCTION
// FUNCTION DEFINED
function funct() {
    console.log("Hello AbdulRehman");
}
//  FUNCTION CALL
funct();
//    FUNCTION DECLEARED
function named(name) {
    console.log("Hello", name);
}
// MULTIPLE FUNCTION CALL
named("AbdulRehman");
named("Husnain");
named("Rashid");
// ANONYMOUS FUNCTION.
// An anonymous function is a function without a named identifier. It can be defined using the function keyword without providing a name, making it an unnamed or anonymous function. Anonymous functions are often used when a function is needed for a short duration or when defining functions on the fly. Here's an example:
// Anonymous function assigned to a variable
const add = function (x, y) {
    return x + y;
};
// Usage
console.log(add(3, 5)); // Output: 8
// ARROR  & LAMBDA FUNCTION
// Arrow functions and lambda functions are essentially the same thing. Arrow functions are a concise way to write anonymous functions, and they were introduced in ECMAScript 6 (ES6). Lambda functions are just another term for anonymous functions and are often used interchangeably with arrow functions.
// Arrow function with no parameters
const greet = () => {
    console.log("Hello!");
};
greet();
// Arrow function with parameters
const sub = (a, b) => a - b;
console.log(sub(5, 3));
//     OPTIONAL PARAMETERS
// You can make function parameters optional by appending a question mark (?) to their names. This allows you to call the function with or without providing values for those parameters. Here's an example:
// Function with optional parameters
function optional(name, greeting) {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
// Calling the function with both parameters
optional("Abdul", "Hi");
// Calling the function with only the required parameter
optional("Rehman");
// DEFAULT PARAMETERS
// You can set default values for function parameters. Default parameters allow you to specify a value that will be used if the corresponding argument is not provided when the function is called. Here's an example:
// Function with default parameters
function defult(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
// Calling the function without providing the 'greeting' parameter
defult("Abdul");
// Calling the function with both parameters
defult("Rehman", "Hi");
// REST PARAMETERS
// Rest parameters allow you to represent an indefinite number of parameters as an array. You define a rest parameter by prefixing the parameter's name with three dots (...). This allows a function to accept any number of arguments, and those arguments will be captured in an array. Here's an example
// Function with rest parameters
function sumNumbers(baseNumber, ...numbers) {
    let sum = baseNumber;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
// Calling the function with different numbers of arguments
console.log(sumNumbers(5)); // Output: 5
console.log(sumNumbers(5, 10)); // Output: 15
console.log(sumNumbers(5, 10, 15)); // Output: 30
console.log(sumNumbers(5, 10, 15, 20)); // Output: 50
function overload(arg1, arg2) {
    return arg1 + arg2;
}
let case01 = overload(2, 3); // case01
let case02 = overload("Abdul", 104); // case02:
let case03 = overload("abdul", "rehman"); // case03:
// let eror =  overload (1,"abdul")              // ERROR
console.log(case01);
console.log(case02);
console.log(case03);
// Function adhering to the defined type  
const expression = (name, greeting) => {
    return `${greeting}, ${name}!`;
};
// Valid usage
console.log(expression("John", "Hello")); // Output: Hello, John!
// Invalid usage (TypeScript will raise a compilation error)
// console.log(expression("Alice", 25)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// CALLBACK FUNCTION:
// A callback function in programming refers to a function that is passed as an argument to another function and is executed after the completion of a certain task or event. Callbacks are commonly used in asynchronous operations, such as handling events, making API calls, or reading files. They allow you to define behavior that should occur once a particular operation finishes.
function func(nam) {
    console.log(nam);
}
function hello(text, callback) {
    // let a = "hello world";
    // callback("hello rehmen");
    callback(text);
}
hello("hello rehman", func);
//     HIGH ORDER FUNCTION
// A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. In other words, a higher-order function operates on functions, making them a powerful and flexible concept in functional programming.
// Higher-order function that takes a function as an argument
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
// Using the higher-order function to create specific multiplier functions
const double = multiplier(2);
const triple = multiplier(3);
// Applying the created multiplier functions
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
