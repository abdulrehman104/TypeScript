"use strict";
// synchronous:  
// A synchronous function is one that executes its operations in a sequential and blocking manner. This means that each operation within the function is completed before moving on to the next one, and the function doesn't involve any asynchronous tasks such as callbacks, promises, or async/await.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumbers(a, b) {
    // Performing addition synchronously
    const result = a + b;
    return result;
}
// Example usage
const sum = addNumbers(5, 3);
console.log(sum); // Output: 8
// In this example, the addNumbers function is synchronous because it performs a simple addition operation without involving any asynchronous tasks.
// asynchronous:
//  an asynchronous function is one that might not complete immediately and allows other operations to continue while it's still working. It often deals with tasks like fetching data from a server, reading files, or other operations that might take some time. TypeScript provides two main ways to work with asynchronous code: using callbacks, promises, and the newer async/await syntax.
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data from a server)
        setTimeout(() => {
            const data = "Hello, this is fetched data!";
            resolve(data);
        }, 2000); // Simulating a 2-second delay
    });
}
// Example usage
fetchData().then((result) => {
    console.log(result); // Output: Hello, this is fetched data!
});
// And here's an example using the async/await syntax:
function fetchData1() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // Simulating an asynchronous operation (e.g., fetching data from a server)
            setTimeout(() => {
                const data = "Hello, this is a new fetched data!";
                resolve(data);
            }, 2000); // Simulating a 2-second delay
        });
    });
}
// Example usage with async/await
function fetchDataAndLog() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetchData1();
        console.log(result); // Output: Hello, this is fetched data!
    });
}
fetchDataAndLog();
// In both examples, the fetchData function simulates an asynchronous task using a delay, and it returns a promise. The first example uses .then() to handle the result, while the second example uses the async/await syntax for more concise and readable code.
