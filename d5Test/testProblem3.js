const testObject = { name: "bruce Wayne", age: 36, location: "Gotham" };
const {mapObject} = require('../d5Problems/problem3.js');

function callback(value){
    if(typeof value === 'number'){
        return value.toString();
    }else if(typeof value  === 'string'){
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return value;
    }
}

let result = mapObject(testObject , callback)
console.log(result);