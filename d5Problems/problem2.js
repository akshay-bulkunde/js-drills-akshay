function values(obj) {
    let valuesArray = [];
    for(let key in obj){
        valuesArray.push(obj[key]);
    }
    return valuesArray;
}

module.exports = {values};