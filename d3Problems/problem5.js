// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, 
// find out how many cars were made before the year 2000 and return the array of older cars and log its length.
const carYear  = require('../d3Problems/problem4.js');
const {inventory} = require('../cars.js')
//console.log(carYear)


    const oldCars = [];
    for(let i=0;i<carYear.length;i++){
        if(carYear[i] < 2000){
            oldCars.push(inventory[i]);
        }
    }
    //console.log(oldCars)
    
//getCarsBefore2000()
module.exports = oldCars;