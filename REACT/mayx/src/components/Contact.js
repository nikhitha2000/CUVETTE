import React from 'react'
import Course from './Course'
function Contact({age,secondName,fName,phone}) {
  return (
    <div>
        <h1>Contact Component</h1>
        <h1>{age}</h1>
        <h1>{secondName}</h1>
        <h1>{fName}</h1>
        <h1>{phone}</h1>
        <Course skills = {["HTML","CSS","JS","REACT"]}/>
    </div>
  )
}

export default Contact