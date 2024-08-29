import React from 'react'

function Props({Authorname,Source,date,price}) {
  return (
    <div>
        <h1>This book was published by {Authorname}</h1>
        <h2>This book was suggested from {Source}</h2>
        <h3>I'm targetting to complete on this {date}</h3>
        <h4>The price of the book is {price}</h4>
    </div>
  )
}

export default Props