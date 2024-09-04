//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function problem7(arrayOfObjects , age){
    for(let i=0;i<arrayOfObjects.length;i++){
        if(arrayOfObjects[i].age == age){
            console.log(`Name : ${arrayOfObjects[i].name}   Email : ${arrayOfObjects[i].email}`)
        }
    }
}

module.exports = {problem7};