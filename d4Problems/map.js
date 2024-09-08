const items = [1, 2, 3, 4, 5, 5];

function map(elements, cb) {
    let result = [];
    for(let i=0;i<elements.length;i++){
        result.push(cb(elements[i]))
    }
    return result;
}

function callback(element){
    return element * element;
}

console.log(map(items , callback))