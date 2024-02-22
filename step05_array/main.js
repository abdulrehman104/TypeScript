"use strict";
// // ARRAY DECLERATION
// let number = ["Abdul", 1, true];
// // DECLERATION WITH MIXED TYPES.
// let number1: (string | number | boolean)[] = ["Abdul", 1, true];
// // DECLERATION USING ARRAY GENRIC TYPE
// let names: Array<string> = ["Abdul"];
// // EMPTY ARRAY
// let ARRAY: number[] = [];
// // ARRAY METHODS.
// let array: string[] = ["ARehman", "Husnain", "Huzaifa", "Moiz"];
// console.log(array); // [ 'ARehman', 'Husnain', 'Huzaifa', 'Moiz' ]
// // INDEX:
// console.log(array[1]); // Husnain
// // LENGTH.
// console.log(array.length);  // 4
// // PUSH:
// array.push('rehman')
// console.log(array);     // [ 'ARehman', 'Husnain', 'Huzaifa', 'Moiz', 'rehman' ]
// console.log(array.push('rehman'));  // 5
// // UNSHIFT: 
// array.unshift('rehman') 
// console.log(array);  // [ 'rehman', 'ARehman', 'Husnain', 'Huzaifa', 'Moiz' ]
// console.log(array.unshift('rehman'));  // 5
// // POP: 
// array.pop()
// console.log(array);  //[ 'ARehman', 'Husnain', 'Huzaifa' ]
// console.log(array.pop()); // Moiz
// // SHIFT:
// array.shift()
// console.log(array);  // [ 'Husnain', 'Huzaifa', 'Moiz' ]
// console.log(array.shift());  // ARehman
// // SLICE:
// // • The slice method returns selected element in an array, as a new array.
// // • The slice method dose not change the orignal array.
// // • Return selected elements.
// let Slice = array.slice(1)  
// console.log(Slice); // [ 'Husnain', 'Huzaifa', 'Moiz' ]
// let slice = array.slice(1,3)
// console.log(slice); // [ 'Husnain', 'Huzaifa' ]
// // SPLICE:
// // • The splice () methods add and/or remove array elements.
// // • The splice () overwrites the orignal array.
// // • Return deleted elements in array.
// array.splice(0,1)
// console.log(array);  // [ 'Husnain', 'Huzaifa', 'Moiz' ]
// array.splice(0,1,"osaid","rehman")
// console.log(array);  // [ 'osaid', 'rehman', 'Huzaifa', 'Moiz' ]
// // CONCATENATION:
// let arry2 :string[] = ["Yousuf","Ammar","Atif"]
// let concatenatedArray  = array.concat(arry2)
// console.log(concatenatedArray);
// // SPREAD: 
// let arry3 :string[] = ["Nabeel","Umer","Husnain"]
// let spredMethod =   [...array,...arry2 , ...arry3]
// console.log(spredMethod);
// // INDEXOF: 
// let indexof:number = array.indexOf("Huzaifa")
// console.log(indexof);
// // INCLUDES:
// let arrayIncluides = array.includes("Huzaifa")
// console.log(arrayIncluides);
// // FILTER:
// // array.filter(callback(element[, index[, array]])[, thisArg])
// // • array: The array to filter.
// // • callback: A function that is called for each element in the array.
// //   • element: The current element being processed.
// //   • index (optional): The index of the current element.
// //   • array (optional): The array on which the filter method was called.
// // • thisArg (optional): Object to use as this when executing the callback. 
// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// let evenNumbers: number[] = numbers.filter(function (num) {
//     return num % 2 === 0;
// });
// console.log(evenNumbers);
// // Map: 
// //  array.map(callback(currentValue[, index[, array]])[, thisArg])
// // • array: The array to map.
// // • callback: A function that is called for each element in the array.
// //    • currentValue: The current element being processed.
// //    • index (optional): The index of the current element.
// //    • array (optional): The array on which the map method was called.
// // • thisArg (optional): Object to use as this when executing the callback.
// let num: number[] = [1, 2, 3, 4, 5];
// let squaredNumbers: number[] = num.map(function (num) {
//     return num * num;
// });
// console.log(squaredNumbers);
// // REDUCE:
// // array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// // • array: The array to reduce.
// // • callback: A function that is called for each element in the array.
// //   • accumulator: The accumulated result of previous iterations.
// //   • currentValue: The current element being processed.
// //   • index (optional): The index of the current element.
// //   • array (optional): The array on which the reduce method was called.
// // • initialValue (optional): The initial value of the accumulator. If not provided, the 
// //  first element of the array is used as the initial value.
// let numbers1: number[] = [1, 2, 3, 4, 5];
// let sum: number = numbers1.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum);
// // FOREACH:
// // The forEach method is commonly used to iterate over elements in an array. The forEach method is available on arrays and is used to execute a provided function once for each array element.
// // It's important to note that the forEach method doesn't return a new array; it simply iterates over the existing array. 
// let newArray: number[] = [1, 2, 3, 4, 5];
// // Using forEach to iterate over array elements
// newArray.forEach(function (element, index, array) {
//     console.log(`Element at index ${index}: ${element}`);
// });
// // You can also use an arrow function for brevity
// newArray.forEach((element, index) => console.log(`Element at index ${index}: ${element}`));
// EVERY:
// The every method is used to check whether all elements in an array satisfy a given condition.
// • array: The array on which you want to perform the check. It could be an array of any type -   
//   numbers, strings, objects, etc.
// • callback: The callback function is executed for each element in the array.
//   • currentValue: Represents the current element being processed in the array.
//   • index (optional): The index of the current element. This is an optional parameter.
//   • array (optional): The array on which the every method was called. This is also optional.
let every = [2, 4, 6, 8, 10];
// Using every to check if all elements are even
let allEven = every.every(function (element) {
    return element % 2 === 0;
});
console.log(allEven); // Output: true
// SOME:
// The some method in TypeScript is a built-in method available for arrays, and it is used to determine whether at least one element in the array satisfies a specified condition. Here's a breakdown of the some method:
// • array: The array on which you want to perform the check. It can be an array of any type, such as 
//    numbers, strings, objects, etc.
// • callback: A function that is executed for each element in the array.
// • currentValue: Represents the current element being processed in the array.
// • index (optional): The index of the current element. This is an optional parameter.
// • array (optional): The array on which the some method was called. This is also optional.
// • Returns: The some method returns a boolean value. It returns true if the callback function returns 
//   true for at least one element in the array; otherwise, it returns false.
let some = [1, 3, 5, 7, 8];
// Using some to check if at least one element is even
let hasEven = some.some(function (element) {
    return element % 2 === 0;
});
console.log(hasEven); // Output: true
// SORT:
// The sort method is a built-in method available for arrays, and it is used to sort the elements of an array. When applied to an array, the sort method arranges the elements based on their values.
// • array: The array on which you want to apply the sorting operation. This can be an array of any 
//   type, such as numbers, strings, or objects.
// • compareFunction (optional): An optional parameter that specifies a custom function to define the 
//   sort order. If omitted, the array elements are converted to strings and sorted based on their   
//   UTF-16 code units. If provided, the compare function takes two arguments (representing elements 
//   of the array) and should return a negative value if the first argument should be sorted before the 
//   second, a positive value if the first argument should be sorted after the second, and zero if they 
//   are considered equal.
// • Returns: The sort method returns the sorted array. It's important to note that this method 
//   modifies the original array in place.
let sorts = ['banana', 'apple', 'orange', 'grape'];
sorts.sort();
console.log(sorts); // Output: ['apple', 'banana', 'grape', 'oran ge']
// REVERSE:
// The reverse method in TypeScript is a built-in method for arrays that is used to reverse the order of elements within the array.
// • array: The array on which you want to perform the reversal. This can be an array of any type, such 
//   as numbers, strings, objects, etc.
// • Returns: The reverse method returns the reversed array. It's important to note that this method 
//  modifies the original array in place, meaning the original array's order is changed.
let reverse = ['apple', 'banana', 'orange', 'grape'];
let reversed = reverse.reverse();
console.log(reversed); // Output: ['grape', 'orange', 'banana', 'apple']
console.log(reverse); // Output: ['grape', 'orange', 'banana', 'apple'] (original array is modified)
// JOIN:
// The join method in TypeScript is a built-in method for arrays that is used to concatenate the elements of an array into a single string.
// • array: The array from which you want to create a string.
// • separator (optional): An optional parameter that specifies the string to be used between the 
//   elements in the resulting string. If omitted, the default separator is a comma.
// • Returns: The join method returns a string representing the concatenated elements of the array.
let join = ['apple', 'banana', 'orange', 'grape'];
// Using join to concatenate array elements into a string with a custom separator
let result = join.join('-');
console.log(result); // Output: apple-banana-orange-grape
// FILL:
// The fill method in TypeScript is a built-in method for arrays that is used to fill all the elements of an array with a specified value, starting from a given index and ending at an optional end index
// • array: The array that you want to fill with a specified value.
// • value: The value with which you want to fill the array.
// • start (optional): An optional parameter that specifies the index at which to start filling the array. If omitted, the default is 0.
// • end (optional): An optional parameter that specifies the index at which to stop filling the array. If omitted, the default is array.length.
// • Returns: The fill method returns the modified array with elements filled with the specified value.
let numbers = [1, 2, 3, 4, 5];
// Using fill to fill the array with the value 0 starting from index 2 to index 4
numbers.fill(0, 2, 4);
console.log(numbers); // Output: [1, 2, 0, 0, 5]
