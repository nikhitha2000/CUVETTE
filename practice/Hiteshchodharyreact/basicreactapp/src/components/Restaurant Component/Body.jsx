import React from 'react';
import styles from "../Restaurant Component/Body.module.css";
import Res from "../Restaurant Component/Res.jsx";

function Body() {
  return (
    <div className= "body">
        <div className={styles.search}>
          Search
        </div>
        <div className={styles.restrocontainer}>
            <Res resName= "Meghana Foods" cuisine = "Biryani, NorthIndian,Asian"/>
            <Res resName= "Shadab" cuisine = "Biryani, NorthIndian,Asian"/>
            <Res resName= "ShahGouse" cuisine = "Biryani, NorthIndian,Asian"/>
            <Res resName= "Hilton" cuisine = "Biryani, NorthIndian,Asian"/>
            <Res resName= "AnteRa" cuisine = "Bar, pub and kitchen"/>
            <Res resName= "Kodikura chitti Gare" cuisine = "Biryani, NorthIndian,Asian"/>
            <Res resName= "1947Military Hotel" cuisine = "Biryani, NorthIndian,Asian"/>
        </div>
        
    </div>
  )
}

export default Body