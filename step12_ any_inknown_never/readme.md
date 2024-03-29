1- any TYPE:
• The any type is a dynamic type that can represent any value. It essentially opts out of type checking, allowing you to assign values of any type to variables of type any.
• It's commonly used when migrating from JavaScript to TypeScript, or in situations where the type of a value is unknown or can vary dynamically.
• It provides flexibility but sacrifices type safety.

2- unknown TYPE:
• The unknown type represents values whose type is not known at compile time. It is more type-safe than any.
• It forces you to perform type checks before working with values of type unknown.
• It's often used when dealing with values from dynamic sources, like user input or data from external APIs.

3- never TYPE:
• The never type represents values that never occur. It is often used for functions that never return or throw exceptions.
• It's useful for exhaustive type checking in discriminated unions, ensuring that all possible cases are covered.
