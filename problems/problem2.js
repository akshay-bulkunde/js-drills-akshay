// Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
const {arrayOfObjects} = require('../persons')


function printHobbyAndAge(arrayOfObjects){
    for(let i=0;i<arrayOfObjects.length;i++){
        console.log(`Hobbies : ${arrayOfObjects[i].hobbies.join(', ')} Age : ${arrayOfObjects[i].age}`)
    }
}

// printHobbyAndAge(data);
module.exports = {printHobbyAndAge};