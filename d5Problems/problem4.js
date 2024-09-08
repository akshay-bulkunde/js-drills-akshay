function pairs(obj) {
    let result = [];
    for(let key in obj){
        result.push([key , obj[key]]);
    }
    return result;
}

module.exports = {pairs};