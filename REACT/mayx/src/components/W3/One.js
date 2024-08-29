import React from 'react'
import styles from '../../components/W3/One.modular.css'

const name = "Nikhitha";
const course = "ReactJS";
let i =10;
function One() {
  return (
    <div>
        <h1 className='sample'>Welcome {name},to the first lecture of{course},Thanks for choosing Geeks for Geeks.</h1>
        <h1 className='custom'>{i==10?"Your React journey has began":false}</h1>
    </div>
  )
}

export default One