const express = require('express');

const app = express();
const path = require('path');
const port = 2000;


app.get('/', (req, res) => {
   res.send("Welcome to the tutorials of ExpressJs");
    })
    app.get("/fi", (req, res) => {
        res.sendFile(path.join(__dirname, "index.html"));
        })

    app.get("/jsonres", (req, res) => {
        res.json([{
            Name:"Nikhitha",
            lastname:"Beeraka"
        },{
            Name:"Praneeth",
            lastname:"Beeraka"
        }])
        })
        app.all('*',(req,res) => {
            res.send("not found");
        
        })
app.listen (port , ()=>{
    console.log("listening on port " + port);
})