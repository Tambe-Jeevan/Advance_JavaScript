// Prototype Chain

let arr = [1, 2, 3];
console.log(arr.__proto__);            // Array prototype
console.log(arr.__proto__.__proto__); // Object prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// arr → inherits from Array.prototype.
// Array.prototype → inherits from Object.prototype.
// Object.prototype → inherits from null (end of chain).

// In Short :
// Prototype = Object that provides inheritance.
// Prototype Chain = The chain of objects through which properties/methods are looked up.
// Helps in memory efficiency and object-oriented features in JS.