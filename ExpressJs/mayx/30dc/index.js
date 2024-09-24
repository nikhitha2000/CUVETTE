const express = require('express');
const Homerouter = require('./Home.js');
const lognrouter = require('./Login.js'); 

const app = express();

const port = 1000;

app.use('/home',Homerouter)
app.use('/login',lognrouter);

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('listening on port');
    }
})