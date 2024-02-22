"use strict";
// INDEX SIGNATURE
// class MyClass {
//   [s: string]: boolean | ((s: string) => boolean);
class MyDictionary {
    constructor() {
        this.data = {}; // defining index signature
    }
    setValue(key, value) {
        this.data[key] = value;
    }
    getValue(key) {
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
    constructor(data) {
        this.data = {};
        this.data = data;
    }
    getInfo(key) {
        return this.data[key];
    }
    setInfo(key, value) {
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
