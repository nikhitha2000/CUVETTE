import React from 'react';
import logo from '../../assets/Burger.png';
import styles from '../Restaurant Component/Header.module.css';


function Header() {
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
            </ul>
        </div>


    </div>
  )
}

export default Header