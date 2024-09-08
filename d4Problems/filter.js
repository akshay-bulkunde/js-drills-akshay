const items = [1, 2, 3, 4, 5, 5];

function filter(elements, cb) {
    let result = [];
    for(let i=0;i<elements.length;i++){
        if(cb(elements[i])){
            result.push(elements[i]);
        }
    }
    return result;
}

function callback(element){
    return element%2 == 0;
}

let result = filter(items , callback);
console.log(result);