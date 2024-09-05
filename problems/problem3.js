//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

const { arrayOfObjects } = require('../persons.js');


function studentsLiveInAustralia(arrayOfObjects){
    for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].isStudent === true && arrayOfObjects[i].country == 'Australia'){
            console.log(`Student : ${arrayOfObjects[i].name}  Country : ${arrayOfObjects[i].country}`)
        }
    }
}

module.exports = {studentsLiveInAustralia};