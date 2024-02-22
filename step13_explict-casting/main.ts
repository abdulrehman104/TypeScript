
// EXAMPLE 01:
let myname: unknown = "AbdulRehman";
console.log((myname as string).length);
console.log((<string>myname).length);


// EXAMPLE 02:
let mynum: unknown = "asad";
console.log((mynum as string).toUpperCase);
console.log((<string>mynum).length);


// EXAMPLE 03:
let num: any = 34;
let str: string = num as string;
console.log(str.lastIndexOf); // shows string method
console.log(str.concat); // shows string method


// EXAMPLE 04:
let any1: any = "Abdul";
let num1: number = <number>any1;
console.log(num1.toFixed); // shows number method
console.log(num1.toPrecision); // shows number method


// EXAMPLE 05:
let value: string | number = "Pakistan";
let strLength: number = (value as string).length; // shows string method
console.log(strLength);


// EXAMPLE 06:
interface Car {
  brand: string;
  model: string;
}

let vehicle: any = { brand: "Toyota", model: "Camry" };

// Explicitly casting to the Car interface
let car: Car = vehicle as Car;
console.log(car.brand);
console.log(car.model);


// EXAMPLE 07:
interface Info {
  Fname: string;
  Lname: string;
  age: number;
}

let info: any = {
  Fname: "Abdul",
  Lname: "Rehman",
  age: 19,
};

let variable = info as Info ;

console.log(variable.Fname);
console.log(variable.Lname);
console.log(variable.age);

console.log(typeof  variable.Fname);
console.log(typeof  variable.Lname);
console.log(typeof variable.age);



