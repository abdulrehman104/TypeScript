// DESTRUCTURING.
// Destructuring is a JavaScript feature that allows you to extract values from arrays or objects and assign them to distinct variables in a concise and convenient way. TypeScript fully supports destructuring and adds type safety to the process.
// ARRAY DESTRUCTURING.

let arr = ["AbdulRehman", 19, "rehman.abdul008844@gmail.com"];
// let [name1, age, email] = arr;
let [, age, ] = arr;
console.log(age);

//OBJECT DESTRUCTURING.
let obj = {
  fname: "Abdul",
  lname: "Rehman",
  age1: 19,
  hobbies: ["programmer", "developer", "business man"],
};

let {fname, lname,age1,hobbies} = obj
// let { hobbies } = obj;
console.log(fname);
console.log(fname +" "+lname);
console.log(hobbies);
