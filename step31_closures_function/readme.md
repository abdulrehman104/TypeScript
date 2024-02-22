# closure Function

A closure is a combination of a function bundled together with references to its surrounding state (the lexical environment). This means that the function can access variables from its outer scope even after the outer scope has finished executing.

```TypeScript
function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    return innerFunction; // returning the inner function
}

let closure = outerFunction(); // closure now contains the inner function along with the reference to outerVariable

closure(); // invoking the inner function

```
