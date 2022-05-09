//! Synchronous vs Asynchronous

//* line by line
// console.log('doing some magic');
// console.log('doing some more awesome magic');

//! Blocking code
// console.log('doing some code');
// alert('STOP EVERYTHING AND BLOCK THE CODE'); //! Do not use
// console.log('doing some more code');

//! Event loop to the rescues
// console.log('doing some code');
// setTimeout(() => {
//   console.log('getting some data from the server');
// }, 2000);
// console.log('doing some more code');

//! WEB API's
//* DOM(Document) → window.document
//* setTimeout → window.setTimeout
//* setInterval → window.setInterval
//* Ajax Call → window.XMLHttpRequest - Not in use any more

//! Call Stack
//* We need a place to keep track of whats happening to our code line by line. A stack takes care of it

//! Memory Heap
//* We need a place to store and write info (var, obj, arr, funcs)

//! CallBack queue
//* We need a place to store our asynchronous code, once the call stack is empty, Yalla fo to the call stack

//! Event Loop
//* We need a middle man between our callback queue and call stack to check when the call stack is empty to push our asynchronous code to the stack.

//!------------------------------
//? PROMISES:
//* A container for a future value

//! A Promise can be in 3 states
//* pending
//* fulfilled
//* rejected

//! A Promise object gets a callback function that has 2 parameters
//* resolve, reject

//! When a promise is settled we can get their value from:
//* .then → if it was fulfilled
//* .catch → if it was rejected
//* they both receive a callback and their first parameter is the value from the promise

//! 3 states of promise
//* fulfilled OR rejected
// const myPromise = new Promise((resolve, reject) => {
//   //   resolve('it is resolved');
//   //   reject('it is reject'); //reject throw an error in the browser
//   const fetchData = true;
//   if (fetchData) {
//     resolve('Got the data');
//   } else {
//     reject("didn't get the data, that is error message");
//   }
// });
// console.log(myPromise);

//* pending
const myPromise2 = new Promise((resolve, reject) => {
  const fetchData = true;
  setTimeout(() => {
    if (fetchData) {
      resolve('Got the data');
    } else {
      reject("didn't get the data, that is error message");
    }
  }, 200);
});
// console.log(myPromise2);
// myPromise2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! Most of the time we'll consume promises and will not create them
//! promises go's at the micro tasks and it will get to the stack after the callback queue

//! Promise chaining
// const myOtherPromise = (data) => {
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     const fetchData = true;
//     setTimeout(() => {
//       if (fetchData) {
//         resolve('Got the other data');
//       } else {
//         reject("didn't get the data, that is error message");
//       }
//     }, 200);
//   });
// };

// myPromise2
//   .then((data) => {
//     return myOtherPromise(data);
//   })
//   .then((otherData) => {
//     console.log(otherData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? A Promise can be in pending state as long as the page is loaded.

// //! Promises usually returning from a function
// const myFuncPromise = (name, bool) => {
//   return new Promise((resolve, reject) => {
//     const fetchData = bool;
//     setTimeout(() => {
//       if (fetchData) {
//         resolve(`${name} everything is ok`);
//       } else {
//         reject(`Sorry ${name} but something went wrong`);
//       }
//     }, 200);
//   });
// };

// console.log(myFuncPromise('Mordi', true)); //! show how to resolve

//! show a api request - https://restcountries.com/v3.1/name/{name}
//start to show the all option
//! JSON can be read in a multiple languages
// looks like json but not

// window.fetch → WEB API
const fetchingData = fetch('https://restcountries.com/v3.1/name/{spain}')
  .then((response) => {
    //! 1 console.log(response);
    //! 2 console.log(response.body);
    // ok → comes from DB and tels us if the result is ok
    // url → that im calling
    // headers → latter but important
    // status → the status of the respond
    //* the most important is the body
    //! show that i cant get the data - readable stream
    //? because i (browser) cant read JSON and we need to phrase it
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
console.log(fetchingData); // what will be the result?

//! show how to make it a function
