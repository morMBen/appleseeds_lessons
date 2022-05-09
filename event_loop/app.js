//* JS - is Single threaded Asynchronous
//? Single threaded - can run only one mission at a time
//? Multi threaded - can run multiple missions at a time

//* Interpreter VS Compiler - ways to translate code into machine language
//? Interpreter - Translate our code while running line after line
//*      Advantage - Starts running without waiting for all code to be translated
//!      Disadvantage - Translates each time a code that he has already translated

//? Compiler - Translate our code and then running
//*      Advantage - Translates the entire code only once
//!      Disadvantage - Waiting for all code to be translated before running

//* JS engine
//? Jit - just in time
// A component that recognizes at runtime which code can be pre-translated and saved
// Chrome - V8 (open source) - nodeJs ...
// Firefox - spider monkey

//* JS Heap - memory allocation - Memory storage to write and read information (Functions and variables)
//* JS Call Stack - A stack of tasks that need to be performed

//? Data structure LIFO - Last in firs out

//Todo
// console.log(1);
// console.log(2);
// console.log(3);

//Todo
// function grand() {
//   console.log('grand');
// }
// function son() {
//   console.log('son');
//   grand();
// }
// function dad() {
//   console.log('dad');
//   son();
// }
// dad();

//Todo
// function req() {
//   req();
// }
// req();

//? What is asynchronous - why do we need it?
//? Blocking
function someLongFunc() {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    console.log(i);
  }
}
someLongFunc();
console.log('Do some thing');

//? Synchronous -
//* An action that takes place in the main process and waits until the action is performed and only then moves on to the next action
//! The operation jams the main process because the main process waits for the operation to end (Blocking)

//? Asynchronous -
//* An action performed outside the main process
//* The operation receives a function that returns to the main process as soon as the asynchronous operation is completed
//! The operation does not jam the main process because it is performed outside the main process (Non Blocking)

function func() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 0);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}
func();

//* WebAPIs - Asynchronous functions held by the browser
//? Always get callBack because we do not know when they end
