//* OOP in JS = Prototypes and functions Constructions

//? Every object has a prototype link to it

const arr = [1, 2, 3, 4];
console.log(arr);

//? How can we create new objects
//* There are 3 ways to create new objects
//todo 1) Construction functions
// const Person = function (firstName, age) {
//   console.log(this); // the this will point to the newly created object
//   this.firstName = firstName;
//   this.age = age;
// };
// console.log(new Person('Bob', 30));

//1. new empty {} is created
//2. when the function is called, the this keyword points to the newly created object
//3. newly created object is linked to the functions prototype
//4. function automatically returns the object

// const bob = new Person('Bob', 40);
// const dana = new Person('dana', 30);

// console.log(bob instanceof Person);

const Person = function (firstName, age) {
  //instance properties
  console.log(this);
  this.firstName = firstName;
  this.age = age;

  //methods - NOT recommended
  //   this.calcAge = function () {
  //     console.log(2022 - this.age);
  //   };
};
const dana = new Person('dana', 30);
// dana.calcAge();

//todo 2) ES6 Classes
//todo 3) Object.create()

//? How do we create prototype
// Every object in JavaScript automatically has a prototype
// that include the constructor function
// every object that we create with the constructor will get access to all the methods and properties

Person.prototype.calcAge = function () {
  console.log(2022 - this.age);
};

console.log(dana);
console.log(dana.__proto__);
console.log(Person.prototype.isPrototypeOf(dana));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Human';
console.log(dana.species);
console.log(dana);
console.log(dana.hasOwnProperty('firstName'));
console.log(dana.hasOwnProperty('species'));

// prototype chain for
console.log(dana.__proto__.__proto__);
console.log(Object.prototype);

const array = [1, 2, 3, 4];
console.log(array.__proto__);
console.log(arr.__proto__ === Array.prototype);
//? How do we link objects to prototypes
