import React from 'react';
import styles from "../Restaurant Component/Body.module.css";
import Res from "../Restaurant Component/Res.jsx";

const restaurantList = [
  { resName: "Meghana Foods", cuisine: "Biryani, North Indian, Asian", rating: 4.5, deliveryTime: "30 mins", price:"500" },
  { resName: "Shadab", cuisine: "Biryani, North Indian, Asian", rating: 4.2, deliveryTime: "35 mins", price: "600" },
  { resName: "ShahGouse", cuisine: "Biryani, North Indian, Asian", rating: 4.0, deliveryTime: "40 mins",price:"1000" },
  { resName: "Hilton", cuisine: "Biryani, North Indian, Asian", rating: 3.9, deliveryTime: "25 mins",price:"1200" },
  { resName: "AnteRa", cuisine: "Bar, Pub, Kitchen", rating: 4.6, deliveryTime: "50 mins",price:"2000" },
  { resName: "Kodikura Chitti Gare", cuisine: "Biryani, North Indian, Asian", rating: 4.1, deliveryTime: "45 mins",price:"800" },
  { resName: "1947 Military Hotel", cuisine: "Biryani, North Indian, Asian", rating: 4.4, deliveryTime: "38 mins",price:"4000" }
];
function Body() {
  return (
    <div className= "body">
        <div className={styles.search}>
          Search
        </div>
        <div className={styles.restrocontainer}>
          {
            restaurantList.map((restaurant,index)=>(
              <Res
              key = {index}
              resName = {restaurant.resName}
              cuisine = {restaurant.cuisine}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              price={restaurant.price}
              />
            ))
          }
        </div>
        
    </div>
  );
}

export default Body