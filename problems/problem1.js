// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const {arrayOfObjects}  = require('../persons.js')


function problem1(arrayOfObjects ){
    //console.log(arrayOfObjects )
    let emails = [];
    for(let i=0;i<arrayOfObjects.length;i++){
        
        emails.push(arrayOfObjects [i].email)
        //console.log(emails)
    }
    //console.log(emails);
    return emails;
}
//console.log(problem1(arrayOfObjects ))
module.exports = { problem1 };
// const ans = problem1(data);
// console.log(ans);