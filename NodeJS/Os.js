const os = require ('os');

console.log(os.freemem());
console.log(os.arch())
console.log(os.userInfo())
console.log(os.networkInterfaces())

const obj = {
    type: os.type(),
    userInfo : os.userInfo(),
    release : os.release()
}

console.log(obj)