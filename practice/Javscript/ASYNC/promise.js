console.log("hello")

var promise = new Promise((resolve, reject) => {

    resolve("api fetch resolving")
})
promise.then((response) => {
console.log(response)
}).catch((err) => {
    console.log(err)
})

console.log("Nikhitha")