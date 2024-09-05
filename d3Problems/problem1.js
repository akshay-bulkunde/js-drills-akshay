// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a 
// function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
const {inventory} = require('../cars.js')
function getCarInformation(inventory  , id){
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].id == id){
            console.log(`Car ${inventory[i].id} is a ${inventory[i].car_make} ${inventory[i].car_model}`);
        }
    }
}


module.exports = {getCarInformation}