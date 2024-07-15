import React, { useState } from 'react'

function Form() {
    const[Input,setInput] = useState({
        name:"",
        email:"",
        password:"",
    })
  return (
    <div>
        <form>
            <input type="text" placeholder = "Enter your name" value= {Input.name}onChange={(e)=>setInput((prev)=>({...prev,name:e.target.value}))}></input>
            <br /><br />
            <input type="email" placeholder = "Enter your email address" value= {Input.email}onChange={(e)=>setInput((prev)=>({...prev,email:e.target.value}))}></input>
            <br /><br />
            <input type="password" placeholder = "Enter your password" value = {Input.password}onChange={(e)=>setInput((prev)=>({...prev,password:e.target.value}))}></input>
            <br /><br />
            <input type = "submit" value= "submit"></input>
        </form>
        <div>
            <h3>My name is: {Input.name}</h3>
            <h3>My email is: {Input.email}</h3>
            <h3>My password is: {Input.password}</h3>
        </div>
    </div>
  )
}

export default Form