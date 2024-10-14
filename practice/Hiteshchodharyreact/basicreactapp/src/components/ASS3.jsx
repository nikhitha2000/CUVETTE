// eslint-disable-next-line no-unused-vars
import React from 'react'
import apple from '../assets/Apple-Logo.jpg';
import search from '../assets/Search.jpg';
import icon from '../assets/download.png';
import styles from "../components/ASS3.module.css";
function ASS3() {
  return (
    <div className= {styles.ASS3}>
      <img src={apple} alt="apple logo" width="200px" height="100px" />
      <img className={styles.middle} src={search} alt="search bar" width="200px" height="150px" />
        <img className={styles.Right} src={icon} alt='Icon' />
      </div>
  )
}

export default ASS3;