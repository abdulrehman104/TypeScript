// TOUPLES:
// // jo jo data types denge just use ke value add kre ge

// EXAMPLE 01:
let fruits: [string, string, number, string, number] = ["orenge","mango",2,"graphes",123];
console.log(fruits);

// POOP METHOD
fruits.pop();                                  // REMOVE LAST ELEMENT IN TOUPLE.
console.log(fruits);
console.log(fruits.pop());               // RETURN POOPED ELEMENT.

// // PUSH METHOD
 fruits.push("apple");                          // ADD ELEMENT IN THE LAST OF TOUPLE.
 console.log(fruits);
 console.log( fruits.push("apple"));         // TOUPLE KE LENGHT KO RETURN KRE GA.

// // SHIFT METHOD
fruits.shift()                                 // REMOVE FIRST ELEMENT IN TOUPLE.
console.log(fruits);
console.log(fruits.shift());                // RETURN REMOVE ELEMENT.

// // UNSHIFT METHOD.
fruits.unshift('Banana')                       // TOUPLE KE START MN ELEMENT KO ADD KR DEGA
console.log(fruits);
console.log(fruits.unshift('Banana'));       // TOUPLE KE LENGHT KO RETURN KRE GA.

// // SLICING METHOD
// // • The slice method returns selected element in an array, as a new array.
// // • The slice method dose not change the orignal array.
// // • Return selected elements.

let newTouple = fruits.slice(1, 4);
console.log(newTouple);

let newFruits = fruits.slice(1,3)
console.log(newFruits);

const citrus = fruits.slice(0,2); 
console.log(citrus);

// // SPLICE
// // • The splice () methods add and/or remove array elements.
// // • The splice () overwrites the orignal array.
// // • Return deleted elements in array.

// // let fruits: [string, string, number, string, number] = ["orenge","mango",2,"graphes",123];
fruits.splice(1,3)
console.log(fruits);                             // remove element 1 to 3

fruits.splice(2,4,"lemon","kiwi",12345)
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// Declaring a tuple
// EXAMPLE 02:
let person: [string, number, boolean] = ["Alice", 30, true];

// Accessing elements
console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 30

// Type safety
// person[1] = true;   //Error: Type 'boolean' is not assignable to type 'number'.

// EXAMPLE 03:
// Function returning multiple values as a tuple
function getUserDetails(userId: number): [string, number, boolean] {
    // ... logic to fetch user details
    return ["Alice", 30, true];
}

// Usage of the function
const userDetails = getUserDetails(123);
console.log(userDetails[0]); // Output: Alice
console.log(userDetails[1]); // Output: 30
