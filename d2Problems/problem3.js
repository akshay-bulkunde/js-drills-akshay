// Find all users with masters Degree.

function problem3(users){
    const usersWithMasterDegree = {};
    for(const user in users){
        if(users[user].qualification === "Masters"){
            usersWithMasterDegree[user] = users[user];
        }
    }
    return usersWithMasterDegree;
}

module.exports = {problem3};