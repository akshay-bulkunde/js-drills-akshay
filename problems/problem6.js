//  Create a function to retrieve and display the first hobby of each individual in the dataset.

function printFirstHobby(arrayOfObjects){
    for(let i=0;i<arrayOfObjects.length;i++){
        console.log(arrayOfObjects[i].hobbies[0]);
    }
}

module.exports = {printFirstHobby};