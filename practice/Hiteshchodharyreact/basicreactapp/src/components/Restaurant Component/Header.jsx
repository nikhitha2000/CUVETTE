import React, { useState } from 'react';
import logo from '../../assets/Burger.png';
import styles from '../Restaurant Component/Header.module.css';


function Header() {
  const[btnname,setbtnname] = useState("Login");
  return (
    <div className={styles.header}>
        <div>
            <img className = {styles.logo}src = {logo}/>
        </div>
        <div className= {styles.navitems}>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className={styles.login} onClick={()=>{
                  btnname === "Login"?setbtnname("Logout"):setbtnname("Login");
                }}>{btnname}</button>
            </ul>
        </div>


    </div>
  )
}

export default Header