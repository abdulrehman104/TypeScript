# Structural typing
Structural typing, also known as duck typing, is a type system used in programming languages where the type compatibility of objects is based on their structure rather than their explicit declaration or inheritance hierarchy. In other words, if two objects have the same set of properties and methods, they are considered to be of the same type, regardless of whether they share a common ancestor or explicitly declare their types.

This concept is often summarized by the phrase "If it looks like a duck and quacks like a duck, it must be a duck." In structural typing, what matters is the shape of an object (i.e., its properties and methods) rather than its name or explicit type declaration.

Languages like TypeScript and languages with dynamically-typed systems like Python often use structural typing. In TypeScript, for example, if an object has all the properties and methods required by a certain interface, it is considered to implement that interface, even if it wasn't explicitly declared to do so.

Here's an example in TypeScript:

```typescript
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound() {
        console.log("Woof!");
    }
}

class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound() {
        console.log("Meow!");
    }
}

function greet(animal: Animal) {
    console.log(`Hello, ${animal.name} says:`);
    animal.makeSound();
}

let dog = new Dog("Buddy");
let cat = new Cat("Whiskers");

greet(dog); // Output: Hello, Buddy says: Woof!
greet(cat); // Output: Hello, Whiskers says: Meow!
```

In this example, both the `Dog` and `Cat` classes have the same structure as the `Animal` interface, so they are considered to be of type `Animal` by the `greet` function, even though they don't explicitly inherit from `Animal`. This demonstrates how TypeScript uses structural typing for type compatibility.