# Loop

In TypeScript, loops are used to iterate over collections of data or to execute a block of code repeatedly until a specified condition is met. Here are the common loop structures and their methods:

1. **for Loop**:

   - Executes a block of code repeatedly until a specified condition evaluates to false.

   ```typescript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

2. **while Loop**:

   - Executes a block of code while a specified condition is true.

   ```typescript
   let i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
   ```

3. **do...while Loop**:

   - Similar to the while loop but always executes the block of code at least once before checking the condition.

   ```typescript
   let i = 0;
   do {
     console.log(i);
     i++;
   } while (i < 5);
   ```

4. **for...in Loop**:

   - Iterates over the properties of an object.

   ```typescript
   let person = { name: "John", age: 30 };
   for (let key in person) {
     console.log(key + ": " + person[key]);
   }
   ```

5. **for...of Loop**:

   - Iterates over the values of an iterable object (arrays, strings, etc.).

   ```typescript
   let numbers = [1, 2, 3, 4, 5];
   for (let num of numbers) {
     console.log(num);
   }
   ```

6. **forEach Method**:

   - Executes a provided function once for each array element.

   ```typescript
   let numbers = [1, 2, 3, 4, 5];
   numbers.forEach((num) => {
     console.log(num);
   });
   ```

7. **map Method**:

   - Creates a new array with the results of calling a provided function on every element in the array.

   ```typescript
   let numbers = [1, 2, 3, 4, 5];
   let doubled = numbers.map((num) => num * 2);
   console.log(doubled); // Output: [2, 4, 6, 8, 10]
   ```

8. **filter Method**:
   - Creates a new array with all elements that pass the test implemented by the provided function.
   ```typescript
   let numbers = [1, 2, 3, 4, 5];
   let evenNumbers = numbers.filter((num) => num % 2 === 0);
   console.log(evenNumbers); // Output: [2, 4]
   ```

These are the common loop structures and methods in TypeScript used for iteration and manipulation of data. Each has its own use cases and advantages depending on the specific requirements of your code.
