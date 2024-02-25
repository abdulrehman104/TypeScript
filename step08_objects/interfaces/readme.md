# Interfaces

Interfaces in TypeScript are used to define contracts for object shapes. They are a powerful way to define the structure of objects and provide type checking for properties and methods. Interfaces are similar to classes but are purely for declaration and do not provide implementations.

Here's a basic example of an interface in TypeScript:

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}

let person: Person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet(); // Output: Hello, my name is John
```

In this example, the `Person` interface defines the structure of a person object, which must have `name` and `age` properties of type `string` and `number` respectively, as well as a `greet` method that takes no parameters and returns `void`.

Interfaces can also extend other interfaces:

```typescript
interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark(): void;
}

let dog: Dog = {
  type: "mammal",
  bark() {
    console.log("Woof!");
  },
};

dog.bark(); // Output: Woof!
```

In this example, the `Dog` interface extends the `Animal` interface, adding a `bark` method specific to dogs.

Interfaces can also define optional properties:

```typescript
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional property
}

let myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};
```

Interfaces in TypeScript are powerful tools for defining object shapes and ensuring type safety throughout your codebase. They enable better code organization, reusability, and maintainability by clearly defining the structure of objects and their expected behaviors.

# Type Narrowing

Type narrowing, also known as type narrowing or narrowing types, is a technique in TypeScript to refine the type of a variable within a certain code block based on runtime checks. This is particularly useful when dealing with union types or when TypeScript cannot determine the specific type of a variable due to complex conditions.

Type narrowing is achieved through various constructs such as type guards, conditional checks, and instanceof checks. Here are some common techniques for type narrowing in TypeScript:

1. **Type Guards**: These are functions or expressions that return a boolean indicating whether a variable is of a specific type. When TypeScript detects a type guard, it narrows the type of the variable within the corresponding code block.

   ```typescript
   function isString(value: any): value is string {
     return typeof value === "string";
   }

   let x: string | number = "hello";

   if (isString(x)) {
     // Within this block, TypeScript knows that `x` is of type `string`
     console.log(x.toUpperCase());
   }
   ```

2. **typeof Type Guards**: Using the `typeof` operator to check the type of a variable at runtime:

   ```typescript
   let x: string | number = "hello";

   if (typeof x === "string") {
     // Within this block, TypeScript knows that `x` is of type `string`
     console.log(x.toUpperCase());
   }
   ```

3. **Instanceof Type Guards**: Checking whether a variable is an instance of a specific class:

   ```typescript
   class Animal {
     move() {
       console.log("Moving...");
     }
   }

   class Dog extends Animal {
     bark() {
       console.log("Woof!");
     }
   }

   function moveAnimal(animal: Animal) {
     if (animal instanceof Dog) {
       // Within this block, TypeScript knows that `animal` is an instance of `Dog`
       animal.bark();
     } else {
       animal.move();
     }
   }
   ```

4. **Null and Undefined Checks**: Checking for null or undefined values:

   ```typescript
   let x: string | null = "hello";

   if (x !== null) {
     // Within this block, TypeScript knows that `x` is of type `string`
     console.log(x.toUpperCase());
   }
   ```

These techniques help TypeScript narrow down the type of a variable within a certain code block, improving type safety and enabling better code optimization and refactoring.

# Type vs Interface

In TypeScript, both `type` and `interface` can be used to define custom data types, but they have some differences in their capabilities and use cases.

### Interfaces:

1. **Definition**: Interfaces allow you to define the structure of an object. They can include properties, methods, and index signatures.

2. **Extensibility**: Interfaces support extending other interfaces to create new ones.

3. **Declaration Merging**: Interfaces can be merged if they share the same name, allowing you to spread the definition of an interface across multiple declarations.

4. **Open-Ended**: Interfaces are open-ended, meaning you can add new properties to an existing interface declaration.

Example:

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}
```

### Types:

1. **Definition**: Types allow you to create aliases for any data type, including primitives, union types, tuple types, and object types.

2. **Union Types and Intersection Types**: Types are more flexible than interfaces when it comes to defining complex types, including union types and intersection types.

3. **Conditional Types**: Types can use conditional logic to generate types based on other types.

4. **Literal Types**: Types can be literal, meaning they can represent exact values rather than just shapes.

Example:

```typescript
type Point = {
  x: number;
  y: number;
};
```

### When to Use Which:

- **Use Interfaces When**:

  - Defining the shape of an object with specific properties and methods.
  - Extending other interfaces.
  - Working with open-ended structures where new properties might be added later.

- **Use Types When**:
  - Creating aliases for complex types, especially union types or intersection types.
  - Defining literal types.
  - Using conditional types or generics for more advanced type manipulation.

In practice, the choice between `type` and `interface` often comes down to personal preference and the specific requirements of your codebase. Both can be used effectively to improve type safety and code clarity in TypeScript projects.
