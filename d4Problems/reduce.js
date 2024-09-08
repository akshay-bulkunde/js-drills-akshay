const items = [1, 2, 3, 4, 5, 5];

function reduce(elements, cb, startingValue) {
    let accumulater;
    let startIndex;
    
    if(startingValue !== undefined){
        accumulater = startingValue;
        startIndex = 0;
    }else{
        accumulater = elements[i];
        startIndex = 1;
    }

    for(let i=0;i<elements.length;i++){
        accumulater = cb(accumulater , elements[i]);
    }
    return accumulater;

}

function callback1(accumulater , element){
    return accumulater + element;
}

function callback2(accumulater , element){
    return accumulater * element;
}

let total = reduce(items , callback1 , 0);
// console.log(total);
let product = reduce(items , callback2 , 1);
console.log(product);