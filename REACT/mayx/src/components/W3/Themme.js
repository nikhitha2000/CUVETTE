import React, { useState } from 'react'

function Theme() {
    const[color,setcolor]= useState("white");
    const[mode,setmode]= useState("Dark");
    function clickhandle(){
        if(color === "white"){
            setcolor("black")
            setmode("Light")
        }else{
            setcolor("white");
            setmode("Dark")
        }
    }
  return (
   
    <div style={{backgroundColor:color,height:'100vh'}}>

        <button onClick={clickhandle}>{mode}</button>
    </div>
  )
}

export default Theme