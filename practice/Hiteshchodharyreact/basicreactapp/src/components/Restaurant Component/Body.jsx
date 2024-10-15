import React from 'react';
import styles from "../Restaurant Component/Body.module.css";
import Res from "../Restaurant Component/Res.jsx";
import restaurantList  from '../../utils/RestaurantList.js';
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