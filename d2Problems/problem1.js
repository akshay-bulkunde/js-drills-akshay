// Find all users who are interested in playing video games.

const {users } = require('../users.js');
//console.log(users)

function videoGameLovers(users){
    const interestedInVideoGames = {};
    videoGameRegex = /video games/i ;  
    for(const user in users){
        
       
        if(videoGameRegex.test(users[user].interests)){
            // Object.assign(interestedInVideoGames , users[user])
                interestedInVideoGames[user] = users[user]
                //console.log(user)
        }
        
        
    }
    //console.log(interestedInVideoGames)
    return interestedInVideoGames;
    
}
//videoGameLovers(users)

module.exports =  {videoGameLovers};