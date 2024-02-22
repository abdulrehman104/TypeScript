//  Spread Operator

// For Array
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: number[] = [6, 7, 8, 9, 10];
let updateArray = [...arr1, ...arr2];
console.log(updateArray);

// For Object
let std1 = {
  name: "AbdulRehman",
  age: 19,
  hobbies: ["Devops", "Data Scientist ", "Web Developer,"],
};

let std2 = {
  ...std1,
  name: "Rehman",
};
console.log(std1);
console.log(std2);

//  Rest Operators
// EXAMPLE 01
function sum(a: number, b: number, ...otherNumber: number[]) {
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

let { ...rest } = std;
console.log(rest);
console.log(rest.name);

