const items = [1, 2, 3, 4, 5, 5];

function find(elements, cb) {
    let result = undefined;
    for(let i=0;i<elements.length;i++){
        if(cb(elements[i])){
            result = elements[i];
            break;
        }
        
    }
    return result;
}

function callback(element){
   return element === 3;
}

function callback1(element){
    return element === 6;
 }

let result = find(items, callback);
console.log(result);

let ans  = find(items , callback1);
console.log(ans);