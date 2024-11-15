import React, { useState } from "react";
import styles from "../Restaurant Component/User.module.css";

const User = (props)=>{
    const[count,setcount] = useState(0);
    const[count2] = useState(1);
    function updateCount(){
        setcount (count + 1);
    }
    return <div className={styles.usercard}>
        <h1>count:{count}</h1>
        <h1>count2:{count2}</h1>
        <h2>Name :{props.name}</h2>
        <h3>Location : Hyderabad</h3>
        <h4>contact :@nikhitha-2000</h4>
        <button onClick={updateCount}>Increment</button>
    </div>
}

export default User;