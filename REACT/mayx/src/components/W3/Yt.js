import React, { useState } from 'react'

function Yt() {
    const[number,setnumber] = useState(0);
    function handleClick(){
        setnumber(number+1);
    }

  return (
    <div>
        <h1>You clicked {number} times</h1>
        <button onClick={handleClick}>Click This!</button>
    </div>
  )
}

export default Yt