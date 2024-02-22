# LITERAL TYPE:  
A literal value type specifies a specific set of values and allows only those values. The
effect is to treat a set of values as a distinct type, which is a useful feature but can be
difficult to understand because it blurs the separation between types and values.

                                      OR                                      
Literal types in TypeScript allow you to specify the exact value a variable can have. They can be used to define a set of specific values that a variable is allowed to hold. This provides a level of precision in your code and can be beneficial in scenarios where you want to restrict a variable to a specific constant value.

## ADVANTAGES OF USING LITERAL TYPES::
- **Type Safety**: Literal types make your code more type-safe by restricting variables to a predefined set of values.
- **Readability**: They improve code readability by clearly indicating the specific values that a variable or parameter can take.


1- UNION WITH LITERAL TYPES:
- You can combine literal types using union (|) to allow a variable to have one of several specific values.


2- DISCRIMINATATED UNIONS:
- Literal types are often used in discriminated unions, where a common property is used to narrow down the possible types in a union.

Type Definition:
- The Shape type is a union of two object types, each representing a specific shape: a circle and a square.
- The property kind is a string literal type with values "circle" or "square" indicating the type of shape.
- Depending on the value of kind, either the radius or sideLength property will be present.

Function Definition:
•The getArea function takes a parameter shape of type Shape.
• Inside the function, it checks the value of shape.kind to determine whether it's a circle or a square.
• If it's a circle, it calculates the area using the formula for the area of a circle (Math.PI * radius^2).
• If it's a square, it calculates the area using the formula for the area of a square (sideLength^2).
• The function returns the calculated area as a number.





