const { arrayOfObjects } = require('../persons.js');


function problem3(arrayOfObjects){
    for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].isStudent === true && arrayOfObjects[i].country == 'Australia'){
            console.log(`Student : ${arrayOfObjects[i].name}  Country : ${arrayOfObjects[i].country}`)
        }
    }
}

module.exports = {problem3};