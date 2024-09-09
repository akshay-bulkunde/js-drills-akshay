

function limitFunctionCallCount(cb, n) {
    let callCount = n; 
    
    return function() {
      if (callCount > 0) {
        --callCount;
        return cb(); 
      } else {
        return null; 
      }
    };
  }


  module.exports ={limitFunctionCallCount};
  // function callback(){
  //   console.log("func invok");
  // }
  
  
  
  // const limitedFunc = limitFunctionCallCount(callback, 3);
  // let n = 4;
  // while(n-- > 0){
  //   console.log(limitedFunc());
  // }
  
  
  