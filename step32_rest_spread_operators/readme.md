# Spread Operators

The spread operator (...) is used to expand elements of an iterable (like an array) or object literal into places where multiple elements or key-value pairs are expected. It's a convenient way to clone arrays, concatenate arrays, merge objects, and more.

```TypeScript
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
```

# Rest Operators:

A rest operator, denoted by three dots (...), is a versatile tool used in various programming languages to collect an indefinite number of arguments and group them into an array

```TypeScript
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


sum(5, 4, 3, 2, 1, 7, 3);

```
