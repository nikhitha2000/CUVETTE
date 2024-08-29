import React, { useState } from 'react'

function State() {
    const[Formdata,setFormdata] = useState({
        name:'',
        email:'',
        password:''
    })
    console.log("Before update:", Formdata);
    function handlechange(e){
        const{name, value} = e.target;
        setFormdata({
        ...Formdata,
        [name]: value
        });
        console.log("After update:",Formdata);
    }
    function handlesubmit(e){
        e.preventDefault();
        setFormdata({
            name:'',
            email:'',
            password:''
        })
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <label htmlFor="name">Enter Your Name: </label>
        <input type='text' id = 'name' placeholder="Enter your name" name= 'name'value = {Formdata.name} onChange={handlechange}/><br/>
        <label htmlFor="email">Enter Your Email: </label>
        <input type='email' id = 'email' placeholder="Enter your Email" name='email'value = {Formdata.email} onChange={handlechange}/><br/>
        <label htmlFor="password">Enter Your password: </label>
        <input type='password' id = 'password' placeholder="Enter your password"name='password' value = {Formdata.password} onChange={handlechange}/><br/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default State