import React from 'react'
import About from './components/About'
var fName = "Nikhitha";
var Phone =1234567890;

function App() {
  return (
    <div>
      <About firstName = {fName} phone = {Phone}/>
      <About firstName = {fName} phone = {Phone}/>
      </div>
  )
}

export default App