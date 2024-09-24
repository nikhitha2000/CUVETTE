const express = require('express');
const router = express.Router();

// const app = express();

// const port = 1500;

// app.listen(port,(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

router.get('/login',(req,res)=>{
    res.send('<h1>Login</h1>');
})

module.exports = router;