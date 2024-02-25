# Variables

variables are declared using the `let`, `const`, or `var` keywords. Here's a brief overview of each:

1. `let`: Declares a block-scoped variable that can be reassigned.

   ```typescript
   let myVariable: string = "Hello";
   myVariable = "World"; // Valid
   ```

2. `const`: Declares a block-scoped variable that cannot be reassigned.

   ```typescript
   const myConst: number = 42;
   // myConst = 50; // Error: Cannot assign to 'myConst' because it is a constant.
   ```

3. `var`: Declares a variable with function-scoped or globally scoped access that can be reassigned.

   ```typescript
   var myVar: boolean = true;
   myVar = false; // Valid
   ```

# Data Types

In TypeScript, there are several basic data types:

4. **Boolean**: Represents true or false values.

   ```typescript
   let isDone: boolean = false;
   ```

5. **Number**: Represents both integer and floating-point numbers.

   ```typescript
   let decimal: number = 6;
   let hex: number = 0xf00d;
   let binary: number = 0b1010;
   let octal: number = 0o744;
   ```

6. **String**: Represents textual data.

   ```typescript
   let color: string = "blue";
   let fullName: string = `Bob Bobbington`;
   ```

7. **Array**: Represents a list of elements of a single type.

   ```typescript
   let list: number[] = [1, 2, 3];
   let list2: Array<number> = [1, 2, 3]; // Generic array type
   ```

8. **Tuple**: Represents an array with fixed number of elements where each element may be of a different type.

   ```typescript
   let x: [string, number];
   x = ["hello", 10]; // OK
   ```

9. **Enum**: A way of giving more friendly names to sets of numeric values.

   ```typescript
   enum Color {
     Red,
     Green,
     Blue,
   }
   let c: Color = Color.Green;
   ```

10. **Any**: Represents any JavaScript value. Allows for opting out of type checking.

    ```typescript
    let notSure: any = 4;
    notSure = "maybe a string instead";
    ```

11. **Void**: Represents the absence of a type.

    ```typescript
    function warnUser(): void {
      console.log("This is a warning message");
    }
    ```

12. **Null and Undefined**: Have their own types `null` and `undefined` respectively.

    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```

13. **Never**: Represents the type of values that never occur.
    ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

These are the basic data types in TypeScript, and they can be combined and used in more complex ways to create powerful and expressive type definitions.
