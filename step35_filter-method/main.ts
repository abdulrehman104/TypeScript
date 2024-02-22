// Example 01
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.filter((items) => {
  return items < 7;
});

// console.log("Orignal Array", arr);
// console.log("new Array", newArr);

// Example 02
let arr1 = [2, 4, 5, 6, 7, 8, 9];
let newarray = arr1.filter((item, i, referArr) => {
  //   console.log("Index Of arr1", i);
  //   console.log("Refrence Array", referArr);
  return item < 8 && item > 4;
});

// console.log(arr1);
// console.log(newarray);

// Example 03
let arrofobj = [
  { name: "Abdul", id: 123, rollNumber: 1 },
  { name: "Rehman", id: 123, rollNumber: 2 },
  { name: "Rashid", id: 124, rollNumber: 3 },
  { name: "Haneef", id: 124, rollNumber: 3 },
  { name: "Khan", id: 12, rollNumber: 3 },
];

let newObj = arrofobj.filter((obj) => {
//   return obj.id == 123;
  return obj.id == 124;
});

console.log(newObj);
