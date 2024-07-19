import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const {id,no} = useParams()
    console.log()
    const navigate =  useNavigate()
    const handleNavigate = ()=>{
        navigate('/Contact')
    }
  return (
    <div>
        {id === "user1" && no==="123" &&(<h1>Nikhitha aadhar no is 249259502676</h1>)}
        {id === "user1" && no==="456" &&(<h1>praneeth aadhar no is 782737232653</h1>)}
        {id === "user2" && no==="321" &&(<h1>priyanshu aadhar no is 64747361223</h1>)}
        {id === "user3" && no==="789" &&(<h1>Chatan aadhar no is 67343274634647</h1>)}
        <button onClick={handleNavigate}>Contact</button>
    </div>
  )
}

export default UserDetails