# Destructuring

Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise syntax for extracting data from arrays and objects, which can make code more readable and expressive.

### Array Destructuring:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Extracting values from the array
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

### Object Destructuring:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Extracting properties from the object
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30
```

### Renaming Variables:

You can also rename variables while destructuring:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Extracting properties with renaming
const { firstName: fName, lastName: lName, age: personAge } = person;

console.log(fName); // Output: John
console.log(lName); // Output: Doe
console.log(personAge); // Output: 30
```

### Default Values:

You can provide default values in case the value being destructured is undefined:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
};

// Providing default values
const { firstName, lastName, age = 25 } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 25
```

Destructuring is a powerful feature in JavaScript that simplifies working with arrays and objects, making code more concise and readable.
