# Fill Method

The `fill()` method is used to fill all the elements of an array with a static value. It modifies the original array and returns the modified array.

Here's how the `fill()` method works in TypeScript:

1. **Syntax**: The syntax for the `fill()` method is as follows:

```typescript
array.fill(value[, start[, end]])
```

2. **Parameters**:

   - `value`: The value to fill the array with.
   - `start` (optional): The index to start filling the array. If omitted, `0` is used as the default start index.
   - `end` (optional): The index to stop filling the array (exclusive). If omitted, the length of the array is used as the default end index.

3. **Return Value**: The modified array with all its elements filled with the specified value.

4. **How it works**: The `fill()` method modifies all elements in the array from the `start` index (inclusive) to the `end` index (exclusive) with the specified `value`. If `start` and `end` are not provided, the entire array is filled. The original array is modified in place, and the modified array is returned.

Example:

```typescript
const array = [1, 2, 3, 4, 5];

// Fill the array with the value 0 from index 2 (inclusive) to index 4 (exclusive)
array.fill(0, 2, 4);

console.log(array); // Output: [1, 2, 0, 0, 5]
```

In this example, the `fill()` method is used to fill the array `array` with the value `0` starting from index `2` (inclusive) and ending at index `4` (exclusive). So, the elements at indices `2` and `3` are replaced with `0`, resulting in `[1, 2, 0, 0, 5]`.

The `fill()` method is useful when you want to initialize an array with a specific value or when you want to overwrite a portion of an array with a new value.
