/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import styles from '../Restaurant Component/Res.module.css';
import Biryani from '../../assets/Biryani.avif';
function Res(props) {
  return (
    <div className={styles.rescard}>
      <img src={Biryani} alt= "Biryani" width= "100%" height= "45%" />
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.4 Stars</h4>
        <h4>38mins </h4>
    </div>
  )
}

export default Res