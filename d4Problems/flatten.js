const nestedArray = [1, [2], [[3]], [[[4]]]]; 

function flatten(elements) {
    let result = [];
    for(let i=0;i<elements.length;i++){
        if(Array.isArray(elements[i])){
            result = result.concat(flatten(elements[i]));
        }else{
            result.push(elements[i]);
        }
    }
    return result;
}

let result = flatten(nestedArray);
console.log(result);