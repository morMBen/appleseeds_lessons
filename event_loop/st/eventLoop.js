//* JS - is Single threaded Asynchronous language
//? Single threaded - can run only one mission at a time
//? Multi threaded - can run multiple missions at a time

//* Interpreter Vs Compiler

//* Heap - memory allocation - storage to write and read info (var and funcs)

//* Call stack - stack of tasks that need to be preformed

//? Data structure - LIFO Last in first out
function req() {
  req();
}
req();

//? Asynchronous - Why And What

//?Synchronous ↓
//!Blocking ↓
function func() {
  let i = 0;
  while (i < Number.MAX_SAFE_INTEGER) {
    console.log(i);
    i++;
  }
}
func();

//? Asynchronous

function setty() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}
setty();

//? WebAPI - Asynchronous functions held by the browser (setTimeout, setInterval,...)
//! Always get callback because we dont know when they end
