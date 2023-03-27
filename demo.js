Function.prototype.bind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

const person = {
  name: "John",
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const boundFunction = person.sayHello.bind(person);
boundFunction(); // logs "Hello, my name is John"
