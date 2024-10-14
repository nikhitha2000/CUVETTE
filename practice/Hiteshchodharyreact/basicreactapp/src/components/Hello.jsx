// eslint-disable-next-line no-unused-vars
import React from 'react';
import Create from './Create';


const Check = ()=>{
  return <span>Im checking</span>
}

function Hello() {
  let a = 23;
  let b = 32;
  return (
    <div>
      <Create/>
      {console.log(a+b)}
      {Check}
      <Check/>
      {console.log("It's working")}
        <h1>Hello World</h1>
    </div>
  )
}

export default Hello;