//   Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function cityName( arrayOfObjects, index ){
    console.log(`Name : ${arrayOfObjects[index].name}  City : ${arrayOfObjects[index].city}`);
}

module.exports = {cityName};