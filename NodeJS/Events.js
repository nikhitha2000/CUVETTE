const eventemitter = require('events');

const emiter = new eventemitter();

emiter.on('checkpage',()=>{
console.log("event occur");
})

emiter.emit('checkpage');