 const sum=require('./add.js');
 const me =  require('./multipleexports.js');
 const arr = require('./Array.js');
 const msg = require('./Exports.js');
 const add = sum(5,5);

 console.log(add);

console.log("HI")

console.log(me.c);
console.log(arr);
console.log(msg.sayHello());
console.log(msg.sayThanks());