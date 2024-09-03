import React from 'react'
import Coun from './Coun'
function HigherOrderComponent(props) {
  return (
    <div>
        <button onClick={props.incrementCount}>Clicked{props.count}</button>
    </div>
  )
}

export default Coun(HigherOrderComponent);