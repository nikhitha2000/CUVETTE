const http = require('http');

const port = 8000;

const server = http.createServer((req,res)=>{
if(req.url === './'){
    res.end("Home page");
}else if(req.url === "/about"){
    res.end("About pageeeee");
}else{
    res.end("404 errror");
}
})

server.listen(port,()=>{
    console.log("Server listening on port " + port);
});