## TypeScript Function Types

In TypeScript, functions play a crucial role in structuring and organizing your code. Understanding the different types of functions available in TypeScript can greatly enhance your ability to write clean, efficient, and maintainable code. Here's a brief overview of various function types you'll encounter:

1. **Function Declaration**:

   - Named functions defined using the `function` keyword. They are globally scoped.

   ```typescript
   function greet(name: string): void {
     console.log("Hello, " + name + "!");
   }
   ```

2. **Function Expression**:

   - Functions assigned to variables or constants, allowing for more flexibility.

   ```typescript
   const greet = function (name: string): void {
     console.log("Hello, " + name + "!");
   };
   ```

3. **Arrow Function**:

   - A concise way to define functions using the arrow (`=>`) syntax, often used for callbacks and short functions.

   ```typescript
   const greet = (name: string): void => {
     console.log("Hello, " + name + "!");
   };
   ```

4. **Function with Optional Parameters**:

   - Functions that can be called with or without certain parameters.

   ```typescript
   function greet(name?: string): void {
     if (name) {
       console.log("Hello, " + name + "!");
     } else {
       console.log("Hello, stranger!");
     }
   }
   ```

5. **Function with Default Parameters**:

   - Functions with predefined default values for parameters.

   ```typescript
   function greet(name: string = "stranger"): void {
     console.log("Hello, " + name + "!");
   }
   ```

6. **Function with Rest Parameters**:

   - Functions that accept a variable number of arguments as an array.

   ```typescript
   function sum(...numbers: number[]): number {
     return numbers.reduce((total, num) => total + num, 0);
   }
   ```

7. **Function with Return Type**:

   - Functions with explicitly declared return types for better type safety.

   ```typescript
   function add(x: number, y: number): number {
     return x + y;
   }
   ```

8. **Function Overloading**:

   - Defining multiple function signatures for a single function, providing versatility and flexibility.

   ```typescript
   function display(val: string): void;
   function display(val: number): void;

   function display(val: any): void {
     console.log("Value is: " + val);
   }
   ```

9. **Anonymous Function**:

   - Functions without a name, often used as callback functions or immediately-invoked function expressions (IIFE).

   ```typescript
   let greet = function (name: string): void {
     console.log("Hello, " + name + "!");
   };
   ```

10. **Immediately Invoked Function Expression (IIFE)**:
    - Functions that execute immediately after being defined, often used for encapsulation and avoiding global namespace pollution.
    ```typescript
    (function () {
      console.log("This function is immediately invoked.");
    })();
    ```

Understanding these different function types will empower you to write more expressive, concise, and maintainable TypeScript code.

---

# CallBack Function

A callback function in TypeScript is a function that is passed as an argument to another function and is executed after the completion of a particular task or event. Callback functions are commonly used in asynchronous programming to handle asynchronous operations such as reading files, making HTTP requests, or executing animations.

Here's an example of a callback function in TypeScript:

```typescript
function fetchData(callback: (data: string) => void): void {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = "This is the fetched data.";
    callback(data); // Calling the callback function with the fetched data
  }, 1000);
}

function processData(data: string): void {
  console.log("Processing data:", data);
}

// Passing the processData function as a callback to the fetchData function
fetchData(processData);
```

In this example:

- The `fetchData` function simulates fetching data asynchronously, using `setTimeout` to simulate a delay.
- It accepts a callback function `callback` as a parameter, which is expected to take a `string` parameter and return `void`.
- After the simulated asynchronous operation is complete, it calls the `callback` function with the fetched data.
- The `processData` function is defined separately and passed as the callback to `fetchData`.
- When `fetchData` completes its task and calls the callback function, `processData` is executed with the fetched data as its argument.

Callback functions are essential for managing asynchronous code and executing tasks in response to events or completion of operations. They provide a way to ensure that certain code is executed only after a specific task has been completed.
