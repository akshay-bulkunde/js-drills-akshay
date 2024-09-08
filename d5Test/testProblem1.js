const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
const {keys} = require('../d5Problems/problem1');

let keyArray = keys(testObject);
console.log(keyArray)