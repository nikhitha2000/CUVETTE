const { error } = require('console');
const fs = require('fs');

// fs.readFile('File.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.writeFile('text.txt','lorem ipsum dolor sit amet, consectetur adipiscing elit',(error,data)=>{

//     if(error){
//         console.log(error);
//     }else{
//         console.log("file created successfully");
//     }
//     })

// fs.writeFileSync('text2.txt','lorem ipsum dolor sit amet, consectet','utf-8');
// console.log('file created successfully');


fs.stat('text.txt',(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})

fs.unlinkSync('text2.txt');
console.log('file deleted successfully');