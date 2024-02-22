# Filter Method

The `filter()` method is used to create a new array with all elements that pass the test implemented by the provided function. It does not modify the original array but returns a new array containing only the elements that satisfy the condition specified in the callback function.

Here's how the `filter()` method works in TypeScript:

1. **Syntax**: The syntax for the `filter()` method is as follows:

```typescript
array.filter(callback(element[, index[, array]])[, thisArg])
```

2. **Parameters**:

   - `callback`: Function to test each element of the array. It takes three parameters:
     - `element`: The current element being processed in the array.
     - `index` (optional): The index of the current element being processed in the array.
     - `array` (optional): The array `filter()` was called upon.
   - `thisArg` (optional): Object to use as `this` when executing `callback`.

3. **Return Value**: A new array with the elements that pass the test. If no elements pass the test, an empty array is returned.

4. **How it works**: For each element in the array, the `callback` function is called. If the `callback` function returns `true` for that element, it is included in the new array; otherwise, it is excluded.

Example:

```typescript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

In this example, the `filter()` method is used to create a new array (`evenNumbers`) containing only the even numbers from the original array `numbers`.

The `filter()` method is commonly used for filtering out unwanted elements from an array based on certain criteria without modifying the original array.
