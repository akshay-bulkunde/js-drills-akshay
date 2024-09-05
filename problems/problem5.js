//    Implement a loop to access and print the ages of all individuals in the dataset.

function printAges(arrayOfObjects){
    for(let i=0;i<arrayOfObjects.length;i++){
        console.log(arrayOfObjects[i].age)
    }
}

module.exports ={ printAges};