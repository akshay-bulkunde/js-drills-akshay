const testObject = { name: "bruce Wayne", age: 36, location: "Gotham" };

function mapObject(obj, cb) {
    let newObject = {};
    for(let key in obj){
        newObject[key] = cb(obj[key]);
    }
    return newObject;
}



module.exports = {mapObject }
// let result = mapObject(testObject , callback);
// console.log(result);