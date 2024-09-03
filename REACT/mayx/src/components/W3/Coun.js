import React, { useState } from 'react'

const Coun = (OriginalComponent) => {
    const EnhancedComponent = ()=>{
        const[count,setcount] = useState(0);
        const incrementCount = ()=>{
            setcount(count+1);
        }
        return(
            <OriginalComponent incrementCount = {incrementCount} count={count}/>
        )
    }
  return EnhancedComponent;
}

export default Coun