"use strict";
// USING LITERAL TYPE FOR SPECIF VALUES:
let gender;
// AASSIGNING VALUES:
gender = "male"; // Valid
gender = "female"; // Valid
gender = "non-binary"; // Valid
// gender = "other"; // Error - This is not a valid value
// FUNCTION USING LITERAL TYPES:
function getDirection(direction) {
    console.log(`Moving ${direction}`);
}
// USAGE IF FUNCTION:   
getDirection("up"); // Valid
getDirection("down"); // Valid
getDirection("left"); // Valid
getDirection("right"); // Valid
// getDirection("diagonal"); // Error - This is not a valid value
// UNION WITH LITERAL TYPES:
let day;
day = "Monday"; // Valid
day = "Tuesday"; // Valid
day = "Wednesday"; // Valid
day = "Thursday"; // Valid
day = "Friday"; // Valid
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
let circle = { kind: "circle", radius: 5 };
let square = { kind: "square", sideLength: 4 };
console.log(getArea(circle)); // Output: 78.54 (approximate)
console.log(getArea(square)); // Output: 16
