import React from 'react'
function Course(props) {
    
  return (
    <div>
    <h1>course</h1>
    <ul>
    {props.skills.map((item,index)=>{
        return <li key = {index}>{item}</li>
    })}
    </ul>
</div>
  )
}

export default Course