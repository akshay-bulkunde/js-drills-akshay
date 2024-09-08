const { invert} = require('../d5Problems/problem5.js');
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; 

let revertObj = invert(testObject);
console.log(revertObj);