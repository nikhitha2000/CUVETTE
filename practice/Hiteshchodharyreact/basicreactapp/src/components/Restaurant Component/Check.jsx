// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

function Check() {
    useEffect(()=>{
        console.log("Checking")
    },[])
  return (
    <div>
        <h4>done</h4>
    </div>
  )
}

export default Check