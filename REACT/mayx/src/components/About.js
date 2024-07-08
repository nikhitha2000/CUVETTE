import React from 'react'
import Contact from './Contact'

function About(props) {

  return (
    <div>
        <h1>About Component</h1>
        <h1>First name is : {props.firstName}</h1>
        <h1>phone is :{props.phone}</h1>
        <Contact age= "24" secondName = "Beeraka" fName = {props.firstName} phone = {props.phone}/>
    </div>
  )
}

export default About