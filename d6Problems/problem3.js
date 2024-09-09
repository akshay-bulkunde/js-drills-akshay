function cacheFunction(cb) {
    let cache = {};
    return function(...args){
        let key = JSON.stringify(args);
        if(cache.hasOwnProperty(key)){

            return `${cache[key]} from cache`;
        }
        let result = cb(...args);
        cache[key] = result;
        return result;
    }
}

function callback(a , b){
    return a+b;
}

let cacheCall = cacheFunction(callback);
console.log(cacheCall(1,2));
console.log(cacheCall(1,2));
  