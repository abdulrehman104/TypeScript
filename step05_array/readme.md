# Array

Arrays are used to store collections of elements. Here are some common methods and operations that can be performed on arrays:

1. **Creating an Array**:

   ```typescript
   let myArray: number[] = [1, 2, 3, 4, 5];
   ```

2. **Accessing Elements**:

   ```typescript
   console.log(myArray[0]); // Output: 1
   ```

3. **Iterating Through an Array**:

   - Using `for` loop:
     ```typescript
     for (let i = 0; i < myArray.length; i++) {
       console.log(myArray[i]);
     }
     ```
   - Using `forEach` method:
     ```typescript
     myArray.forEach((element) => {
       console.log(element);
     });
     ```

4. **Adding Elements**:

   - Using `push` method:
     ```typescript
     myArray.push(6); // Adds 6 to the end of the array
     ```
   - Using spread operator (`...`):
     ```typescript
     myArray = [...myArray, 6]; // Adds 6 to the end of the array
     ```

5. **Removing Elements**:

   - Using `pop` method:
     ```typescript
     myArray.pop(); // Removes the last element from the array
     ```
   - Using `splice` method:
     ```typescript
     myArray.splice(2, 1); // Removes one element at index 2
     ```

6. **Concatenating Arrays**:

   - Using `concat` method:
     ```typescript
     let newArray = myArray.concat([6, 7, 8]);
     ```

7. **Finding Elements**:

   - Using `indexOf` method:
     ```typescript
     let index = myArray.indexOf(3); // Returns the index of element 3
     ```
   - Using `find` method:
     ```typescript
     let element = myArray.find((element) => element === 3); // Returns the element 3
     ```

8. **Checking if an Element Exists**:

   - Using `includes` method:
     ```typescript
     let exists = myArray.includes(3); // Returns true if element 3 exists in the array
     ```

9. **Sorting Array**:

   - Using `sort` method:
     ```typescript
     myArray.sort((a, b) => a - b); // Sorts the array in ascending order
     ```

10. **Mapping Array**:

    - Using `map` method:
      ```typescript
      let newArray = myArray.map((element) => element * 2); // Doubles each element of the array
      ```

11. **Filtering Array**:
    - Using `filter` method:
      ```typescript
      let newArray = myArray.filter((element) => element > 2); // Filters elements greater than 2
      ```

These are some of the common methods and operations that can be performed on arrays in TypeScript. Arrays offer powerful capabilities for managing collections of data efficiently.
