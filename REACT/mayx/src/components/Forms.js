import React, { useState } from 'react'

function Forms() {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[condition,setCondition] = useState(false)
    function handleChange(e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        setCondition(true)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder = "Enter your name" value= {name}onChange={handleChange}></input>
            <br /><br />
            <input type="email" placeholder = "Enter your email address" value= {email}onChange={(e)=>setEmail(e.target.value)}></input>
            <br /><br />
            <input type="password" placeholder = "Enter your password" value = {password}onChange={(e)=>setPassword(e.target.value)}></input>
            <br /><br />
            <input type = "submit" value= "submit"></input>
        </form>
        {condition && (
                <div>
                    <h3>My name is: {name}</h3>
                    <h3>My email is: {email}</h3>
                    <h3>My password is: {password}</h3>
                </div>
            )}
    </div>
  )
}

export default Forms