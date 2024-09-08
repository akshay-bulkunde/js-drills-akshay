function invert(obj){
    let invertObj = {};
    for(let key in obj){
        let value = obj[key];
        invertObj[value] = key;
    }
    return invertObj;
}

module.exports  = { invert};