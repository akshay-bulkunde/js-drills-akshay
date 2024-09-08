const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
const {values} = require('../d5Problems/problem2.js');

let valuesArray = values(testObject);
console.log(valuesArray);