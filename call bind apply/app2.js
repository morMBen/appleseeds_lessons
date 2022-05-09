//* bind return a function with binded this
const getThisName = (messageA, messageB) => {
  return message + this.name + messageB + this.name;
};

const tool = {
  name: 'drill',
  sound: 'brrrr',
};
const animal = { name: 'dog', sound: 'Woof woof' };

const vehicle = { name: 'van', sound: 'vroom' };
