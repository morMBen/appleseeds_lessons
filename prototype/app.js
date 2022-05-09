//* OOP - Object Oriented Programing
//! NOT Java-script

//? Abstraction -
//? Encapsulation -
//? Inheritance -
//? Polymorphism -

//* OOP in JS

//? Prototype inheritance
//? Delegation

// const arr = [1, 2, 3];
// arr.map((e) => e * 2);

const User = function (a, b) {
  this.name = a;
  this.last = b;
};
User.prototype.getName = function () {
  return this.name;
};
User.prototype.hasOwnProperty = function () {
  return 'brr';
};

const instanceOfUser2 = new User('2', 'din');

const instanceOfUser = new User('dima', 'din'); //* new Object() → this → proto
console.log(instanceOfUser.__proto__.__proto__.hasOwnProperty('getName'));

// const arr = [];
// console.log(arr.__proto__);
// console.log(Object.getPrototypeOf(User));
// console.log(instanceOfUser.__proto__ === User.prototype);

// console.log(User.prototype.isPrototypeOf(instanceOfUser));

// console.log(Object.getPrototypeOf(instanceOfUser));
// const instanceOfUser = {
//   name: 'dima',
//   lastName: 'din',
//   getName() {
//     return this.name;
//   },
// };

console.log(global);
