const {inventory } = require('../cars.js')
//console.log(inventory)
const {problem1} = require('../d3Problems/problem1.js')

problem1(inventory , 33)
problem1(inventory , inventory.length)
problem1(inventory , " ");
problem1(inventory , 66);
problem1([] , 9);