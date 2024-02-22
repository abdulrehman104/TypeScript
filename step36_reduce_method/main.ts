let arr = [1, 2, 3, 4];
let newArr = arr.reduce((total, currentElem, index, refer) => {
  //   console.log("index", index);
  //   console.log("refrenceArray", refer);
  //   console.log("Total", total, "currentElement", currentElem);
  return total + currentElem;
}, 0);

// console.log(newArr);

let arr1 = [1, 2, 3, 4];
let newArr1 = arr1.reduce((total, currentElem, index, refer) => {
  //   console.log("index", index);
  //   console.log("refrenceArray", refer);
  //   console.log("Total", total, "currentElement", currentElem);
  return total + currentElem;
}, 0);

console.log(newArr1);

// Error
let arr2 = [];
let newArr2 = arr2.reduce((total, currentElem) => {
  return total + currentElem;
}, 0);

console.log(newArr1);
