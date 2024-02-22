# Join method

The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```TypeScript
let arr = [1,2,3,4,5]
// let newArr = arr.join("-")
// let newArr = arr.join("_")
let newArr = arr.join(",")
console.log(newArr);
```

# Concat Method

**Purpose:**

- Combines two or more arrays into a new array.
- Returns a new array, modifying the original arrays is not possible.

**Syntax:**

```typescript
array.concat(value1: T[], value2: T[], ...values: T[][]): T[];
```

- `array`: The array you want to concatenate.
- `value1`, `value2`, ...`values`: Arrays or values to be concatenated.
- `T`: The type of elements in the array.

**Key Points:**

- Each value passed to `concat` can be either an array of type `T[]` or a single value of type `T`.
- Non-array values are treated as single-element arrays.
- Nested arrays are not flattened by default.
- The return type is always a new array of type `T[]`.

**Example:**

```typescript
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedArray = numbers1.concat(numbers2, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]

const strings = ["hello", "world"];
const combinedString = numbers1.concat(strings); // [1, 2, 3, "hello", "world"]
```
