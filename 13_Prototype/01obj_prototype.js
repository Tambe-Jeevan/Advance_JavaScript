/*What is a Prototype?
In JavaScript, every object has a hidden property called [[Prototype]] (also accessible as __proto__ in browsers).
This prototype is itself an object and acts as a blueprint from which the object can inherit properties and methods.
When you try to access a property or method on an object:
JavaScript first looks at the object itself.
If not found, it looks at the object’s prototype.
This continues up the chain (called the Prototype Chain) until it reaches null.*/

function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
  return `Hello, my name is ${this.name}`;
};

let p1 = new Person("Jeevan");
let p2 = new Person("Sagar");

console.log(p1.sayHello()); // Hello, my name is Jeevan
console.log(p2.sayHello()); // Hello, my name is Sagar
