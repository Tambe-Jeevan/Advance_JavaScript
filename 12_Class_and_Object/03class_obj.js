/*Class in JavaScript
A class is a blueprint or template for creating objects.
It defines properties (data) and methods (functions) that the objects will have.
Introduced in ES6 (2015) as a cleaner way to work with objects & inheritance. */

class Car {
  constructor(brand, model) {
    this.brand = brand;   // property
    this.model = model;   // property
  }

  drive() {               // method
    return `${this.brand} ${this.model} is driving.`;
  }
}



/*Object in JavaScript
An object is an instance of a class.
When you create an object, it follows the structure (blueprint) defined by the class.
Objects hold real data. */

let car1 = new Car("Tesla", "Model X");
let car2 = new Car("BMW", "X5");

console.log(car1.drive());  // Tesla Model X is driving.
console.log(car2.drive());  // BMW X5 is driving.
