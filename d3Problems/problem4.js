// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing 
// only the car years and log the result in the console as it was returned.
const { inventory } = require("../cars");




    let carYear= [];
    for(let i = 0;i<inventory.length;i++){
        carYear.push(inventory[i].car_year);
        // console.log(carYear)
    }

    
module.exports = carYear;
