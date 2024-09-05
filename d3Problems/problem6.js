// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

const { inventory } = require("../cars.js");

function getBMWAndAudi(inventory){
    const BMWAndAudi = [];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi"){
            BMWAndAudi.push(inventory[i])
        }
    }
    return BMWAndAudi;
}

//console.log(getBMWAndAudi(inventory))

module.exports = {getBMWAndAudi};
