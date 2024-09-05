// Find all users staying in Germany.

const users   = require('../users.js')
//console.log(users )

function problem2(users){
    //console.log(users)
    const Germans = {};

    for (const user in users) {
        if(users[user].nationality === "Germany") {
            Germans[user] = users[user];
            //console.log(Germans)
        }
    }
    return Object.keys(Germans);
    
}

//console.log(problem2(users))

module.exports = {problem2}