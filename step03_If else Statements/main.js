"use strict";
// Write a TypeScript program that takes a number as input and prints "Even" if it's an even number, and "Odd" if it's an odd number.
let num1 = 34;
let num2 = 31;
if (num1 % 2 === 0) {
    console.log(`${num1} it's a even number`);
}
else {
    console.log(`${num1} it's an odd number`);
}
if (num2 % 2 !== 0) {
    console.log(`${num2} it's a odd number`);
}
else {
    console.log(`${num2} it's an even number`);
}
// Write a TypeScript program that takes a student's score as input and prints the corresponding grade. Use the following grading scale:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
let grade = 70;
if (grade >= 90) {
    console.log("Your grade is A");
}
else if (grade >= 80) {
    console.log("Your grade is B");
}
else if (grade >= 70) {
    console.log("Your grade is C");
}
else if (grade >= 60) {
    console.log("Your grade is D");
}
else {
    console.log("Your grade is F");
}
// Create a TypeScript program that takes the current hour as input (in 24-hour format) and prints a greeting message based on the time of day. Use the following conditions:
// 5 AM to 11:59 AM: "Good Morning"
// 12 PM to 4:59 PM: "Good Afternoon"
// 5 PM to 8:59 PM: "Good Evening"
// 9 PM to 4:59 AM: "Good Night"
let currentlyHour = 12;
if (currentlyHour >= 5 && currentlyHour <= 11) {
    console.log("Good Morning");
}
else if (currentlyHour >= 12 && currentlyHour <= 4) {
    console.log("Good Afternoon");
}
else if (currentlyHour >= 5 && currentlyHour <= 4) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Night");
}
// create calculator
let sum1 = 25;
let sum2 = 5;
let operator = "=";
if (operator === "+") {
    console.log(sum1 + sum2);
}
else if (operator === "-") {
    console.log(sum1 - sum2);
}
else if (operator === "*") {
    console.log(sum1 * sum2);
}
else {
    console.log(sum1 / sum2);
}
