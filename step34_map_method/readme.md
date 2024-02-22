# Map Method

The `map()` method is used to create a new array by applying a function to each element of the original array. It doesn't modify the original array but returns a new array containing the results of applying the provided function to each element.

Here's how the `map()` method works in TypeScript:

1. **Syntax**: The syntax for the `map()` method is as follows:

```typescript
array.map(callback(currentValue[, index[, array]])[, thisArg])
```

2. **Parameters**:

   - `callback`: Function that produces an element of the new array. It takes three parameters:
     - `currentValue`: The current element being processed in the array.
     - `index` (optional): The index of the current element being processed in the array.
     - `array` (optional): The array `map()` was called upon.
   - `thisArg` (optional): Object to use as `this` when executing `callback`.

3. **Return Value**: A new array with each element being the result of the callback function.

4. **How it works**: For each element in the array, the `callback` function is called, and its return value becomes the value of the corresponding element in the new array.

Example:

```typescript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

In this example, the `map()` method is used to create a new array (`squaredNumbers`) where each element is the square of the corresponding element in the original array `numbers`.

The `map()` method is commonly used for transforming each element of an array according to a specified logic, without modifying the original array.
