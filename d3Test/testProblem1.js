const {inventory } = require('../cars.js')
//console.log(inventory)
const {getCarInformation} = require('../d3Problems/problem1.js')

getCarInformation(inventory , 33)
getCarInformation(inventory , inventory.length)
getCarInformation(inventory , " ");
getCarInformation(inventory , 66);
getCarInformation([] , 9);