// Write a TypeScript program that takes a number as input and prints "Even" if it's an even number, and "Odd" if it's an odd number.
let num1: number = 34;
let num2 = 31;

if (num1 % 2 === 0) {
  console.log(`${num1} it's a even number`);
} else {
  console.log(`${num1} it's an odd number`);
}

if (num2 % 2 !== 0) {
  console.log(`${num2} it's a odd number`);
} else {
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
} else if (grade >= 80) {
  console.log("Your grade is B");
} else if (grade >= 70) {
  console.log("Your grade is C");
} else if (grade >= 60) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}

// Create a TypeScript program that takes the current hour as input (in 24-hour format) and prints a greeting message based on the time of day. Use the following conditions:

// 5 AM to 11:59 AM: "Good Morning"
// 12 PM to 4:59 PM: "Good Afternoon"
// 5 PM to 8:59 PM: "Good Evening"
// 9 PM to 4:59 AM: "Good Night"

let currentlyHour: number = 12;
if (currentlyHour >= 5 && currentlyHour <= 11) {
  console.log("Good Morning");
} else if (currentlyHour >= 12 && currentlyHour <= 4) {
  console.log("Good Afternoon");
} else if (currentlyHour >= 5 && currentlyHour <= 4) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

// create calculator
let sum1 = 25;
let sum2 = 5;
let operator = "=";

if (operator === "+") {
  console.log(sum1 + sum2);
} else if (operator === "-") {
  console.log(sum1 - sum2);
} else if (operator === "*") {
  console.log(sum1 * sum2);
} else {
  console.log(sum1 / sum2);
}

// //    PRACTICE
let x: number = 10;
let y: number = 15;

if (x > 0) {
  console.log("x is positive");
  if (y > 0) {
    console.log("y is also positive");
  } else {
    console.log("y is not positive");
  }
} else {
  console.log("x is not positive");
}

//    IF age = "19" & age1 = "65" THEN
let age: string = "19";
let age1: string = "65";
let age2: string = "23";
// === data type and value dono ko scack kre ga
if (age === "19" && age1 === "65") {
  console.log(" age is 19 & age1 is 65");
} else if (age2 === "23") {
  console.log(" age2 is 23");
} else {
  console.log(" age is not 19");
}



               // NESTED IF STATEMENTS
            //    EXAMPLE1
let a:number = 7
if(a > 5){
   if(a < 10){
       console.log( "a is between 5 and 10")
    }else{
        console.log( "a is greater than and equal to 10")
    }
}else{
    console.log( "a is less than and equal to 5")
}

//    EXAMPLE2
let x1 : number = 10
let y1 : number = 15

if(x1 > 0){
    console.log( "x1 is positive")
    if(y1 > 0){
        console.log( "y1 is also positive")
    }else{
        console.log( "y1 is not positive")
    }
}else{
    console.log( "x1 is not positive")
}

//       GRADE CALCULATOR;
function calculateAverageGrade(mathGrade: number, scienceGrade: number, englishGrade: number): string {
  const average: number = (mathGrade + scienceGrade + englishGrade) / 3;

  // if (isNaN(average)) {
  //     return "Invalid grades";
  // }

  if (average >= 90) {
      return "A";
  } else if (average >= 80) {
      return "B";
  } else if (average >= 70) {
      return "C";
  } else if (average >= 60) {
      return "D";
  } else {
      return "F";
  }
}

// Example usage
const mathGrade: number = 95;
const scienceGrade: number = 95;
const englishGrade: number = 98;

const letterGrade: string = calculateAverageGrade(mathGrade, scienceGrade, englishGrade);
console.log(`The average letter grade is: ${letterGrade}`);
