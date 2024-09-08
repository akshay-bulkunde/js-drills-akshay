function keys(obj) {
    let keyArray = [];
    for(let key in obj){
        keyArray.push(key);
    }
    return keyArray;
}

module.exports = {keys}