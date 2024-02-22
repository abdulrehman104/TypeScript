# Every Method

The `every()` method is used to check if all elements in an array satisfy a specified condition. It returns `true` if all elements in the array pass the test implemented by the provided function, otherwise it returns `false`.

Here's how the `every()` method works in TypeScript:

1. **Syntax**: The syntax for the `every()` method is as follows:

```typescript
array.every(callback(element[, index[, array]])[, thisArg])
```

2. **Parameters**:

   - `callback`: A function that tests each element of the array. It takes three parameters:
     - `element`: The current element being processed in the array.
     - `index` (optional): The index of the current element being processed in the array.
     - `array` (optional): The array `every()` was called upon.
   - `thisArg` (optional): Object to use as `this` when executing `callback`.

3. **Return Value**: The `every()` method returns `true` if all elements in the array pass the test implemented by the provided function. Otherwise, it returns `false`.

4. **How it works**: The `every()` method iterates through each element in the array. For each element, the `callback` function is called. If the `callback` function returns `true` for every element in the array, the `every()` method returns `true`. If the `callback` function returns `false` for any element, the `every()` method immediately returns `false` without further iteration.

Example:

```typescript
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven); // Output: true
```

In this example, the `every()` method is used to check if all elements in the `numbers` array are even. Since all elements are even numbers, the `every()` method returns `true`.

The `every()` method is useful when you need to verify whether a condition is true for every element in an array without having to iterate through the entire array manually.
