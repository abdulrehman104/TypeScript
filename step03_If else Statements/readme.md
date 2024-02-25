# Conditional Statement

In TypeScript, conditional statements are used to execute different blocks of code based on specified conditions. The most common conditional statements are `if`, `else if`, and `else`. Here's how they are used:

1. **if Statement**: Executes a block of code if a specified condition is true.

   ```typescript
   let num: number = 10;
   if (num > 0) {
     console.log("Number is positive.");
   }
   ```

2. **if...else Statement**: Executes one block of code if a specified condition is true and another block if the condition is false.

   ```typescript
   let num: number = -5;
   if (num > 0) {
     console.log("Number is positive.");
   } else {
     console.log("Number is non-positive.");
   }
   ```

3. **else if Statement**: Allows you to check multiple conditions and execute a block of code for the first condition that evaluates to true.

   ```typescript
   let num: number = 0;
   if (num > 0) {
     console.log("Number is positive.");
   } else if (num < 0) {
     console.log("Number is negative.");
   } else {
     console.log("Number is zero.");
   }
   ```

4. **Nested if Statements**: Using if statements within another if statement.

   ```typescript
   let num: number = 10;
   if (num >= 0) {
     if (num === 0) {
       console.log("Number is zero.");
     } else {
       console.log("Number is positive.");
     }
   } else {
     console.log("Number is negative.");
   }
   ```

5. **Switch Statement**: Provides an alternative way to handle multiple conditions based on the value of an expression.
   ```typescript
   let day: number = 3;
   switch (day) {
     case 0:
       console.log("Sunday");
       break;
     case 1:
       console.log("Monday");
       break;
     case 2:
       console.log("Tuesday");
       break;
     case 3:
       console.log("Wednesday");
       break;
     case 4:
       console.log("Thursday");
       break;
     case 5:
       console.log("Friday");
       break;
     case 6:
       console.log("Saturday");
       break;
     default:
       console.log("Invalid day");
   }
   ```

These conditional statements help control the flow of execution in TypeScript programs based on certain conditions.
