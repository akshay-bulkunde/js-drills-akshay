const {inventory }= require('../cars');
//console.log(inventory)
const {getBMWAndAudi} = require('../d3Problems/problem6')

// console.log(getBMWAndAudi(inventory))

const data = JSON.stringify(getBMWAndAudi(inventory))
console.log(data);