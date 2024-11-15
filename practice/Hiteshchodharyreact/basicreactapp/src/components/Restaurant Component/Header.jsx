import React, { useState } from 'react';
import logo from '../../assets/Burger.png';
import styles from '../Restaurant Component/Header.module.css';
import {Link} from "react-router-dom";
import useOnlineStatus from '../../utils/useOnlineStatus';


function Header() {
  const[btnname,setbtnname] = useState("Login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className={styles.header}>
        <div>
            <img className = {styles.logo}src = {logo}/>
        </div>
        <div className= {styles.navitems}>
            <ul>
              <li>OnlineStatus :{onlinestatus? "💚":"🔴"}</li>
                <Link to = "/"><li>Home</li></Link>
                <Link to = "/about"><li>About us</li></Link>
                <li>Contact</li>
                <li>Cart</li>
                <Link to = "/grocery"><li>Grocery</li></Link>
                <button className={styles.login} onClick={()=>{
                  btnname === "Login"?setbtnname("Logout"):setbtnname("Login");
                }}>{btnname}</button>
            </ul>
        </div>


    </div>
  )
}

export default Header