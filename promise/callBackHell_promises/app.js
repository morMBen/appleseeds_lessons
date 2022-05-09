//! Synchronous vs Asynchronous

//* line by line
// console.log('doing some magic');
// console.log('doing some more awesome magic');

//! Blocking code
// console.log('doing some code');
// alert('STOP EVERYTHING AND BLOCK THE CODE'); //! Do not use
// console.log('doing some more code');

//! Event loop to the rescue
// console.log('doing some code');
// setTimeout(() => {
//   console.log('getting some data from the server');
// }, 0);
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

//!-------------------------------------------------------
//! Promise
//* container for a future value

//! Promise can be in 3 states
//* pending
//* fulfilled
//* rejected

//! A Promise object gets a callback func that has 2 parameters
//* resolved, reject

//! when a promise is settled we can get their value from:
//* .then → if it was fulfilled
//* .catch → if it was rejected
//*  they both receive a callback and their first parameter is the value from the promise

//! The 3 states of Promise

// const brr = '';
// const myPromise = new Promise((resolved, rejected) => {
//   let fetchData = true;
//   setTimeout(() => {
//     // fetchData = false;
//     if (!fetchData) {
//       resolved('it is resolved');
//     } else {
//       rejected('it is rejected');
//     }
//   }, 2000);
// });

// myPromise
//   .then((valueReturnedFromPromise) => {
//     console.log(valueReturnedFromPromise);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   .finally(() => {
//     console.log('finally');
//   });
// console.log(myPromise);

//! Most of the time we'll consume promises and not create them

//! Promise Chaining
// const myOtherPromise = (data) => {
//   return new Promise((resolved, rejected) => {
//     console.log(`${data} from first promise`);
//     let fetchData = true;
//     setTimeout(() => {
//       fetchData = false;
//       if (!fetchData) {
//         resolved('got the data from second promise');
//       } else {
//         rejected("didn't get the data");
//       }
//     }, 2000);
//   });
// };

// myPromise
//   .then((data) => {
//     return myOtherPromise(data);
//   })
//   .then((data2) => {
//     console.log(data2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log(myPromise);

//? A Promise can be in pending as long as the page is open

//* End Point → https://restcountries.com/v3.1/name/{name}

//* fetch → window.fetch → WEB API

const getCountry = (country) => {
  const fetchingData = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};
getCountry('usa');
