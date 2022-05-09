//* OOP in JS = Prototypes and functions constructions

//? Every object has a prototype

// console.log({});
// console.log(new Object());
// console.log([]);
// console.log(new Array());

//? How can we create a new objects
//? How can we create a prototype
//? How do we link objects to prototypes

//* there are 3 way to create a new object
//todo 1) Construction functions
// behind the seance of the constructor function
//1. new empty {} created
//2. the this is created and points to the object that has been created
//3. the object linked to the functions prototype
//4. function returns the object
const Person = function (firstName, age) {
  //   console.log(this);
  this.name = firstName;
  this.myAge = age;
  //   this  → represent our newly object
  this.hasEyes = true;
  //! NOT recommended
  //   this.calcAge = function () {
  //     return 2022 - this.myAge;
  //   };
};

Person.prototype.calcAge2 = function () {
  return 2022 - this.myAge;
};
Person.prototype.species = 'Human';

const ofir = new Person('Ofir', 25);
const liat = new Person('Liat', 25);
console.log(ofir instanceof Person);
// console.log(liat.calcAge());
console.log(liat);
console.log(ofir.__proto__ === Person.prototype);
console.log(ofir.__proto__.__proto__ === Object.prototype);
console.log(ofir.__proto__.__proto__ === Object.prototype);

Array.prototype.find = 'No thing';

const Student = function (firstName, age) {
  //   let newPerson = Person(firstName, age);
  this.name = firstName;
  this.myAge = age;
};
Object.setPrototypeOf(Person, Student);

const ofirTheStudent = new Student('Ofir', 25);

console.log(ofirTheStudent);

//todo 2) ES6 Classes
//todo 3) Object.create()

function Animals(name, age) {
  let newAnimal = Object.create(animalConstructor);
  newAnimal.name = name;
  newAnimal.age = age;
  return newAnimal;
}
let animalConstructor = {
  sing: function () {
    return `${this.name} can sing`;
  },
  dance: function () {
    return `${this.name} can dance`;
  },
};
function Cats(name, age, whiskerColor) {
  let newCat = Animals(name, age);
  Object.setPrototypeOf(newCat, catConstructor);
  newCat.whiskerColor = whiskerColor;
  return newCat;
}
let catConstructor = {
  whiskers() {
    return `I have ${this.whiskerColor} whiskers`;
  },
};

Object.setPrototypeOf(catConstructor, animalConstructor);
const clara = Cats('Clara', 33, 'purple');
clara.sing();
clara.whiskers();

console.log(clara);
// Expected Output
// "Clara can sing"
// "I have purple whiskers"

const Person2 = function (firstName, age) {
  let newPerson = Object.create(personConstructor);
  newPerson.species = 'human';
  newPerson.name = firstName;
  newPerson.myAge = age;
  return newPerson;
};

const personConstructor = {
  name: function () {
    return this.name;
  },
  myAge: function () {
    return this.myAge;
  },
};
const Student2 = function (firstName, age, field) {
  let newStudent = new Person2(firstName, age);
  Object.setPrototypeOf(newStudent, studentConstructor);
  newStudent.subject = field;
  return newStudent;
};

const studentConstructor = {
  subject: function () {
    return this.subject;
  },
};
Student2.prototype.hasEyes = true;

Object.setPrototypeOf(studentConstructor, personConstructor);
// console.log(new Person2('Amir', 35));
console.log(new Student2('Amir', 35, 'Math'));
