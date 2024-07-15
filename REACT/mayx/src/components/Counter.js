import React, { useState } from 'react'

function Counter() {
    const[count,setCount] = useState(0)
    const[color,setColor] = useState("pink")
    let myStyle = {
        fontSize : '20px',
        backgroundColor : color,
        color : "white"

    }
  return (
    
    <div style = {myStyle}>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("Blue")}>Blue</button>
        <button onClick={()=>setColor("Yellow")}>Yellow</button>
        <button onClick={()=>setColor("Gray")}>Gray</button>

        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment counter</button>
        
    </div>
  )
}

export default Counter