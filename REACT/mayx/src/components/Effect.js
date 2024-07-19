import React , { useEffect, useState } from 'react'

function Effect() {
    const[count,setCount] = useState(0);
    useEffect(()=>{
        console.log("first");
    })
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Effect