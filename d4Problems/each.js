const items = [1, 2, 3, 4, 5, 5];

function each(elements, cb) {
    for(let i=0;i<elements.length;i++){
        cb(elements[i] , i);
    }
}

function callback(element , index){
    console.log(`Element ${element} is on index ${index}`)
}

each(items , callback);