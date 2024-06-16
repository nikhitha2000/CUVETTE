// function getAgeYear(){
//     return new Date().getFullYear - this.age
// }

// //factory function --> produces objects continously depending on the different arguments
// function createUser(firstName,lastName,age){
//     const user  = {
//         firstname : firstName,
//         lastname : lastName,
//         age,
//         getAgeYear :getAgeYear
//     }
//     return user;
// }
// let user1 = createUser("John","smith",20)
// let user2 = createUser("nikhitha","beeraka",24)

function greet(){
    this.adfar = "adfar rashid"
    return "Hello"
}