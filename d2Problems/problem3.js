// Find all users with masters Degree.

function usersWithMasterDegree(users){
    const usersWithMasterDegree = {};
    for(const user in users){
        if(users[user].qualification === "Masters"){
            usersWithMasterDegree[user] = users[user];
        }
    }
    return usersWithMasterDegree;
}

module.exports = {usersWithMasterDegree};