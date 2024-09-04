//   Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function problem4( arrayOfObjects, index ){
    console.log(`Name : ${arrayOfObjects[index].name}  City : ${arrayOfObjects[index].city}`);
}

module.exports = {problem4};