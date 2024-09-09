const {limitFunctionCallCount} = require('../d6Problems/problem2');

function callback(){
    return `function invoke`;
}


let callCount = limitFunctionCallCount(callback , 3);
let n=4;
while(n-- > 0){
   console.log(callCount()) 
}





