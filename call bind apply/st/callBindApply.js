const tool = {
  name: 'drill',
  sound: 'brrr',
  getSound: function (mes1, mes2) {
    return `${mes1} ${this.name} ${mes2} ${this.sound}`;
  },
};

const animal = {
  name: 'dog',
  sound: 'Woof Woof',
};

const vehicle = {
  name: 'van',
  sound: 'vroom',
};

const arr = [tool, animal, vehicle];

// const getSound = function (mes1, mes2) {
//   return `${mes1} ${this.name} ${mes2} ${this.sound}`;
// };

// console.log(tool.getSound('the sound of', 'sounds like'));

//* bind call apply
//? return a new func with binded this
//? .bind(newThis)
// const getThisSound = getSound.bind(vehicle);
// console.log(getThisSound('the sound of', 'sounds like'));
const getThisSoundAnimal = tool.getSound.bind(animal);
console.log(getThisSoundAnimal('the sound of', 'sounds like'));

//? call & apply → invoke the func and define a new this
//? func.call(newThis, arg, arg, ...args)
// console.log(getSound.call(vehicle, 'the sound of', 'sounds like'));

//? func.apply(newThis, [arg, arg])
// console.log(getSound.call(vehicle, ['the sound of', 'sounds like']));
