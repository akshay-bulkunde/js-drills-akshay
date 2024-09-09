function counterFactory() {
    let counter = 0;
    return {
        increment(){
            return ++counter;
        },

        decrement(){
            return --counter;
        }
    };

}

let counter = counterFactory();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());




