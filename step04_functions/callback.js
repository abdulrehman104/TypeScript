"use strict";
// call back
// • aesa function jo function call krte huwe dosre function ke argument mn deye hn wo call back function kehlata he.
// • kse kam ke perform hone pr call hoo
function callback(callback, newName) {
    callback(newName);
}
let arrowFunc = (name) => {
    console.log(`Hello ${name}`);
};
callback(arrowFunc, 'Hassan');
// // EXAMPLE:
// // Function with a callback parameter
// function performTask(taskName: string, callback: (result: string) => void) {
//     console.log(`Performing task: ${taskName}`);
//     // Simulating an asynchronous operation (e.g., fetching data)
//     setTimeout(() => {
//       const result = `Task "${taskName}" completed`;
//       callback(result);
//     }, 2000);
//   }
//   // Callback function
//   function handleCompletion(result: string) {
//     console.log(result);
//   }
//   // Using the function with a callback
//   performTask("Download Data", handleCompletion);
