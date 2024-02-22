// INDEX SIGNATURE
// class MyClass {
//   [s: string]: boolean | ((s: string) => boolean);

// }

// class MyClass {
//   [key: string]: number;
//   age: 19;
// }

// EXAMPLE 01
interface Object {
  [key: string]: any;
}

class MyDictionary {
  private data: Object = {}; // defining index signature

  setValue(key: string, value: any) {
    this.data[key] = value;
  }

  getValue(key: string) {
    return this.data[key];
  }
}

const dictionary = new MyDictionary();
dictionary.setValue("foo", 123);
dictionary.setValue("bar", "hello");

console.log(dictionary.getValue("foo")); // Output: 123
console.log(dictionary.getValue("bar")); // Output: hello
console.log(dictionary.getValue("baz")); // Output: undefined

// EXAMPLE 02
class Person {
  private data: Object = {};

  constructor(data: { [key: string]: any }) {
    this.data = data;
  }

  getInfo(key: string) {
    return this.data[key];
  }

  setInfo(key: string, value: any) {
    this.data[key] = value;
  }
}

// Create a new Person instance
const person = new Person({ name: "John", age: 30 });

// Access and modify properties dynamically
console.log(person.getInfo("name")); // Output: John
console.log(person.getInfo("age")); // Output: 30

person.setInfo("city", "New York");
console.log(person.getInfo("city")); // Output: New York

// EXAMPLE 03.
class DynamicObject {
  private data: { [key: string]: any } = {};

  // Setter method to add or update properties dynamically
  setValue(key: string, value: any) {
    this.data[key] = value;
  }

  // Getter method to retrieve properties dynamically
  getValue(key: string): any {
    return this.data[key];
  }

  // Method to check if a property exists
  hasKey(key: string): boolean {
    return key in this.data;
  }

  // Method to get all keys
  getKeys(): string[] {
    return Object.keys(this.data);
  }
}

// Example usage
let obj = new DynamicObject();

obj.setValue("name", "John");
obj.setValue("age", 30);
obj.setValue("email", "john@example.com");

console.log(obj.getValue("name")); // Output: John
console.log(obj.getValue("age")); // Output: 30
console.log(obj.getValue("email")); // Output: john@example.com

console.log(obj.hasKey("age")); // Output: true
console.log(obj.hasKey("address")); // Output: false

console.log(obj.getKeys()); // Output: ["name", "age", "email"]
