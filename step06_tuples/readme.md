# Touples

In TypeScript, a tuple is a data structure that allows you to store a fixed-size collection of elements of different types. Unlike arrays, which can hold elements of the same type and have a dynamic size, tuples have a fixed size and each element can have its own specific type.

Here's how you can define and use tuples in TypeScript:

1. **Defining a Tuple**:
   You can define a tuple by specifying the types of its elements in a fixed order inside square brackets `[]`.

   ```typescript
   let myTuple: [string, number] = ["Hello", 123];
   ```

2. **Accessing Tuple Elements**:
   You can access tuple elements by their index, similar to arrays.

   ```typescript
   console.log(myTuple[0]); // Output: "Hello"
   console.log(myTuple[1]); // Output: 123
   ```

3. **Updating Tuple Elements**:
   Once defined, the types and order of elements in a tuple cannot be changed. However, you can update individual elements.

   ```typescript
   myTuple[0] = "World";
   ```

4. **Destructuring Tuples**:
   You can use destructuring assignment to extract individual elements of a tuple into separate variables.

   ```typescript
   let [str, num] = myTuple;
   console.log(str); // Output: "World"
   console.log(num); // Output: 123
   ```

5. **Tuple Type Inference**:
   TypeScript can infer tuple types based on the assigned values.

   ```typescript
   let anotherTuple = ["TypeScript", 3.5]; // Inferred type: [string, number]
   ```

6. **Tuple with Optional Elements**:
   You can include optional elements in a tuple by assigning `undefined` to them.

   ```typescript
   let optionalTuple: [string, number?] = ["Hello"];
   ```

7. **Tuple with Rest Parameters**:
   You can use rest parameters to define a tuple with an indefinite number of elements of the same type.

   ```typescript
   let restTuple: [string, ...number[]] = ["Hello", 1, 2, 3];
   ```

Tuples are useful when you want to work with fixed-size collections of heterogeneous data, such as coordinates `(x, y)` or a key-value pair `(key, value)`. They provide a way to enforce type safety and ensure the correct structure of your data.
