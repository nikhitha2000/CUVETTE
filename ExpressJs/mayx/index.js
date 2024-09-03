// const express = require('express');
// const app = express();
// const port = 4000;

// app.set("view engine","ejs");
// const path =  require('path');
// app.get('/', (req, res) =>{
//     res.render("index")
// })
// app.listen(port,(err)=>{
// if(err){
//     console.log("Error listening");
// }
// })

var express = require('express')
const app = express()
var studentArray = require('../mayx/class/initialdata')
app.use(express.json())
app.get("/api/student",(req,res)=>{
res.send(studentArray)
})
app.get("/api/student/:id",(req,res)=>{
let id = req.params.id;
if(!isNaN(id)){
id= parseInt(id)
let studentObj = studentArray.find((item)=>{
    return item.id === id
})
if(studentObj === undefined){
    res.status(404).send({"message":"status not found"})
}
res.send(studentObj)
}else{
    res.status(404).send({"message":"Invalid ID expected ID but found String"}) 
}
})
app.post('/api/student', (req, res) => {
    let reqKeys = Object.keys(req.body);
    let studentObj = req.body;

    // Check if all required keys are present in the request body
    if (reqKeys.includes("id") && reqKeys.includes("name") && reqKeys.includes("currentClass") && reqKeys.includes("Division")) {
        studentArray.push(studentObj);
        res.send(studentArray);
    } else {
        res.status(400).send({ "message": "Bad request - missing required fields" });
    }
});
    
//     let id= 8;
//     let name= "nikki";
//     let currentClass= 18;
//    let Division = "D";
//    studentArray.push({id:id,name:name,currentClass:currentClass,Division:Division})

app.put("/api/student/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    let oldObj = studentArray.find((item)=>{
        return item.id === id
    })
    if(oldObj === undefined){
        req.status(404).send({"message":"Student not found"})
    }else{
        let newObj = req.body;
        let studentObj = {...oldObj,...newObj}
        let index = studentArray.indexOf(oldObj)
        studentArray.splice(index, 1,studentObj)

        // studentArray.push(studentObj)
        res.send(studentArray)
    }
})
app.delete("/api/student/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let oldObj = studentArray.find((item) => {
        return item.id === id;
    });

    if (oldObj === undefined) {
        res.status(404).send({ "message": "Student not found" }); // Corrected 'req' to 'res'
    } else {
        let index = studentArray.indexOf(oldObj);
        studentArray.splice(index, 1); // Remove the student object from the array

        res.send(studentArray); // Return the updated array
    }
});

app.listen(8000,(err)=>{
    if(err){
        console.log("Server error: " + err);
    }
})