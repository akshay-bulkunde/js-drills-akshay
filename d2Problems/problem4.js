// Group users based on their Programming language mentioned in their designation.

const {users} = require('../users.js')

function problem4(users){
    const groupByLanguage = {
        "python" : [],
        "golang" : [],
        "javascript" : []
    }
    const pythonRegex = /python/i;
    const GolangRegex = /golang/i;
    const JavascriptRegex = /Javascript/i;
    for(const user in users){
        if(pythonRegex.test(users[user].desgination)){
            groupByLanguage["python"].push(user);
        }else if(GolangRegex.test(users[user].desgination)){
            groupByLanguage["golang"].push(user)
        }else if(JavascriptRegex.test(users[user].desgination)){
            groupByLanguage["javascript"].push(user)
        }
    }
    //console.log(groupByLanguage)
    return groupByLanguage;

}

module.exports = {problem4};