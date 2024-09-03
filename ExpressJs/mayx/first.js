var fs = require('fs');

fs.writeFileSync("nikhitha.html","<h1>Welcome to expressJS</h1>");

var data = fs.readFileSync("nikhitha.html","utf-8");

console.log(data);

fs.appendFileSync("nikhitha.html","<h1> i'm trying to modify the data</h1>");

fs.unlinkSync("nikhitha.html");