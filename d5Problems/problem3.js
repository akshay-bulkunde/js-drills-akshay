const testObject = { name: "bruce Wayne", age: 36, location: "Gotham" };

function mapObject(obj, cb) {
    let newObject = {};
    for(let key in obj){
        newObject[key] = cb(obj[key]);
    }
    return newObject;
}

function callback(value){
    if(typeof value === 'number'){
        return value.toString();
    }else if(typeof value === 'string'){
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return value;
    }

}

module.exports = {mapObject }
// let result = mapObject(testObject , callback);
// console.log(result);