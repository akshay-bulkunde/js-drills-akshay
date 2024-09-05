// Find all users staying in Germany.

const users   = require('../users.js')
//console.log(users )

function problem2(users){
    //console.log(users)
    const germanUsers = {};

    for (const user in users) {
        if (users[user].nationality === "Germany") {
            germanUsers[user] = users[user];
        }
    }
    console.log(germanUsers)
}

// console.log(problem2(users))

module.exports = {problem2}