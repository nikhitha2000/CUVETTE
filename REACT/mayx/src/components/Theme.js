import React, { useState } from 'react'

function Theme() {
    // const [bgColor,setbgColor] = useState("white")
    // const[Text,setText] = useState("Dark")
    // const[color,setColor] = useState("black")
    // function handlebgcolor(){
    //     if(bgColor === "white"){
    //         setText("Light")
    //         setbgColor("black")
    //         setColor("white")
    //     }else{
    //         setText("Dark")
    //         setbgColor("white")
    //         setColor("black")
    //     }
    // }
    const [condition,setCondition] = useState(false)
    function handlebgcolor(){
        setCondition(!condition)
    }
  return (
    <div style = {{backgroundColor:condition?"black":"white",height:"100vh"}}>
        <button onClick={handlebgcolor}>{condition?"Light":"Dark"} Mode</button>
        <h1 style= {{color:condition?"white":"black"}}>Hello Morrow</h1>
    </div>
  )
}

export default Theme