"use strict";
//  Example 01.
function outerFunction() {
    let outerVariable = "I am from outer function";
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }
    return innerFunction; // returning the inner function
}
let closure = outerFunction(); // closure now contains the inner function along with the reference to outerVariable
closure(); // invoking the inner function
//  Example 02.
function f1(a) {
    return function (b) {
        return a + b;
    };
}
let closureFunc = f1(10);
console.log(closureFunc(12));
//  Example 03.
function sum(a) {
    return {
        f2: function (b) {
            return a + b;
        },
        f3: function (c) {
            return a + c;
        },
    };
}
let fun = sum(15);
console.log(fun.f2(34));
console.log(fun.f3(33));
// Example 04
function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log("Count:", count);
    }
    function decrement() {
        count--;
        console.log("Count:", count);
    }
    function getCount() {
        return count;
    }
    return {
        increment,
        decrement,
        getCount,
    };
}
let counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
console.log("Current count:", counter.getCount()); // Output: Current count: 1
