//    Implement a loop to access and log the city and country of each individual in the dataset.

function problem8(arrayOfObjects){
    for(let i=0;i<arrayOfObjects.length;i++){
        console.log(`City : ${arrayOfObjects[i].city}  Country : ${arrayOfObjects[i].country}`);
    }
}

module.exports = {problem8};