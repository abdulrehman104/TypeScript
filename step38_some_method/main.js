"use strict";
let arr = [1, 3, 5];
let newarr = arr.some((items) => {
    //   return items < 1; // false
    //   return items < 2;   // true
    //   return items > 5 ;// false
    return items < 5; // true
});
console.log(newarr);
