// EXAMPLE 01:
// Create two interfaces where we define the type of an object.
interface Info1 {
  Fname: string;
  Lname: string;
  contact: number;
}

interface Info2 {
  Fname: string;
  Lname: string;
  contact: number;
}

// Now, we have created two objects with the same properties, keys and values.
let my_info1: Info1 = {
  Fname: "Abdul",
  Lname: "Rehman",
  contact: 1234567,
};
let my_info2: Info2 = {
  Fname: "Hasan",
  Lname: "Murtaza",
  contact: 1357911,
};

// Now, we have printed both objects.
console.log(my_info1);
console.log(my_info2);

my_info1 = my_info2;
my_info2 = my_info1;

console.log(my_info1);
console.log(my_info2);


// EXAMPLE 02:
interface Info3 {
  Fname: string;
  Lname: string;
  contact: number;
}

interface Info4 {
  Fname: string;
  Lname: string;
  contact: number;
  age: number;
  male: boolean;
}

let my_info3: Info3 = {
  Fname: "Abdul",
  Lname: "Rehman",
  contact: 1234567,
};
let my_info4: Info4 = {
  Fname: "Hasan",
  Lname: "Murtaza",
  contact: 1234567,
  age: 20,
  male: true,
};

console.log(my_info3);
console.log(my_info4);

my_info3 = my_info4;
my_info4 = my_info3; // ERROR

console.log(my_info3);

// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.

// TypeScript is comparing each member in the type against
// each other to verify their equality.


// EXAMPLE 03 CASE 1:
let myTypee = { name: "Abdul", id: 12345, city: "karachi" }; //Case 1: can only assign a type which has  the same properties
// Object literals can only have properties that exist in contextual type

// CASE 02:
// The key we have provided in the object will be used as it is; we cannot change the key.
myTypee = { id: 23232323, name: "abdulrehman", city_area: "lahore" }; //ERROR


// CASE 03:
// If we don't know which keys to add in the object, we can use ({z: string}: any), and then add the desired value in place of this key in the object.            // INDEX SIGNATURE = {z: string}
let a: { name: string; id: number; [z: string]: any };
a = { name: "Abdul", id: 12345, my_city: "karachi" };
console.log(a);

//  FOR EXAMPLE: Any key added in place of [z: string] will be accepted.
a = { name: "Abdul", id: 12345, area: "karachi" };
console.log(a);

a = { name: "Abdul", id: 12345, name1: "rehman" };
console.log(a);

// CASE 04:
// If you try to add an extra property, it will show an error. It means you can't add any new property or data; you have to stick to the ones you provided initially.
myTypee = { name: "Abdul", id: 12345, city: "karachi",age:19, };           // ERROR

//=============================================================================================================

let myTypeee = { name: "Abdul", id: 12345, city: "karachi" };
let myTypeee2 = { id: 2, name: "Rehman", city: "lahore" };

console.log(myTypeee);
console.log(myTypeee2);

// CASE 1:
myTypeee = myTypeee2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
console.log(myTypeee);

//CASE 2a:
// let myTypeee = { name: "Abdul", id: 12345, city: "karachi" };
let myTypeee3 = { id: 2, name_person: "Hassan", city: "Islamabad" };

// let myTypeee3 = { id: 2, name: "Hassan",city:"Islamabad" };

myTypeee = myTypeee3;   // ERROR
 //Case 2: Error, renamed or missing property, rule same for stale and fresh object

//CASE 2b:
let y : { id: number; [y: string]: any; city: string };
let z = { id: 2, name_person: "Abdul", city: "Islamabad" };
y = z; // Ok, `name_person` matched by index signature
console.log(y);

//CASE 3:
// let myTypeee = { name: "Abdul", id: 12345, city: "karachi" };     // FRESH OBJECT
console.log(myTypeee);
let myTypeee4 = { name: "Abdul", id: 12345, city: "karachi", age: 19 };

myTypeee = myTypeee4; // STALE OBJECT
console.log(myTypeee);





// /*
// var x: { foo: number };
// x = { foo: 1, baz: 2 };  // Error, excess property `baz`

// var y: { foo: number, bar?: number };
// y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`

// var a: { foo: number };
// var a1 = { foo: 1, baz: 2 };
// a = a1;//No Error

// var z: { foo: number, bar?: number };
// var z1 = { foo: 1, baz: 2 };
// z = z1;//No Error
// */
