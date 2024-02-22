// Create a class

class C {
  //  add a private
  // _length = 0; //  In JavaScript, there is no keyword for declaring private members.
  private _length = 0; //  In TypeScript, there is a  private keyword for declaring members.
  // create getter function
  get length() {
    return this._length;
  }
  // create setter function
  set length(value) {
    this._length = value;
  }
}

const obj = new C();

// call getter function
obj.length;

// call setter function
obj.length = 1;

console.log(obj.length);

// Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations.

// EXAMPLE 01:
class D {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    if (value > 0) {
      this._length = value;
    }
  }
}

const obj1 = new C();
obj1.length = -1;
console.log(obj1);

// In TypeScript, getters and setters are a way to define properties on a class while controlling access to them. They allow you to execute code when a property is accessed (getter) or modified (setter).

// EXAMPLE 02:
class Practice {
  private _number: number = 0;

  get number(): number {
    return this._number;
  }
  set number(value) {
    if (value >= 0) {
      this._number = value;
    } else {
      console.log("Value must be greater then 0");
    }
  }
}
let practice = new Practice(); // Output: 0
console.log(practice.number);
practice.number = 1; // Output: 1
console.log(practice.number);
practice.number = -1; // Error: Value must be greater than or equal to 0.
console.log(practice.number); // Output: 1

// EXAMPLE 03:
class Rectangule {
  private _width: number;
  private _height: number;
  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }
  get width(): number {
    return this._width;
  }

  set width(val: number) {
    if (val >= 0) {
      this._width = val;
    } else {
      console.log("Value must be greater than 0");
    }
  }
  get height(): number {
    return this._height;
  }

  set height(val: number) {
    if (val >= 0) {
      this._height = val;
    } else {
      console.log("Value must be greater than 0");
    }
  }
}

let ractangule = new Rectangule(10, 15);
console.log(ractangule);

// GET THE VALUE OF WIDTH AND HEIGHT
console.log(ractangule.width);
console.log(ractangule.height);

// CHANGE WIDTH AND HEIGHT
ractangule.width = -2;
ractangule.height = -1;

// VALUE IS GREATER THAN 0
ractangule.width = 25;
ractangule.height = 30;
console.log(ractangule.width);
console.log(ractangule.height);

// // EXAMPLE 04:
// Create a class representing a Person with properties firstName and lastName. Implement a getter that returns the full name of the person by concatenating the firstName and lastName with a space in between. Implement setters for both firstName and lastName properties to ensure that they are non-empty strings.

class Person {
  private firstName: string;
  private lastName: string;
  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
  get fullname(): string {
    return `${this.firstName}  ${this.lastName}`;
  }
  set fname(fname: string) {
    this.firstName = fname;
  }
  set lName(lname: string) {
    this.lastName = lname;
  }
}

// create a object in this class
let person = new Person("Abdul", "Rehman");
console.log(person);

// change first and last name
person.fname = "Husnain";
person.lName = "Rashid";

// Print object
console.log(person.fullname);



// // EXAMPLE 05:
class Product {
  private _name: string;
  private _price: number;
  private _quantity: number;
  constructor(name: string, price: number, quantity: number) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }
}

let product = new Product("Laptop",50000,3)
console.log(product);

product.name = 'Mobile'
product.price = 20000
product.quantity = 5

console.log(product);


