// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const {arrayOfObjects}  = require('../persons.js')


function emailAddresses(arrayOfObjects ){
    //console.log(arrayOfObjects )
    let emails = [];
    for(let i=0;i<arrayOfObjects.length;i++){
        
        emails.push(arrayOfObjects [i].email)
        //console.log(emails)
    }
    //console.log(emails);
    return emails;
}
//console.log(emailAddresses(arrayOfObjects ))
module.exports = { emailAddresses };
// const ans = emailAddresses(data);
// console.log(ans);