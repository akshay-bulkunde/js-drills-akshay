// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical 
// order and log the results in the console as it was returned.
const {inventory} = require('../cars.js');

function problem3(inventory){
   
    function compareByCarModel(a,b){
        if(a.car_model.toLowerCase() < b.car_model.toLowerCase()){
            return -1;
        }else if(a.car_model.toLowerCase() > b.car_model.toLowerCase()){
            return 1;
        }else{
            return 0;
        }
    }
    inventory.sort(compareByCarModel);
    return inventory;
}

module.exports = {problem3};

//console.log(problem3(inventory))