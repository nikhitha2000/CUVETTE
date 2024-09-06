const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/db1").then(()=>{
    console.log('connection established');
})

const teacher = new mongoose.Schema({
name:String,
age:Number,
email:String,
})

const teachers = new mongoose.model("teacher",teacher)

const addData = ()=>{
    const teacher1 = new teachers({
        name:"SrinivasaRao",
        age:55,
        email:"dummy@gmail.com",
    })
    teacher1.save()
}
addData()