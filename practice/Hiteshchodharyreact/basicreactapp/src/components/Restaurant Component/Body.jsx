// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from "../Restaurant Component/Body.module.css";
import Res from "../Restaurant Component/Res.jsx";
import restaurantList  from '../../utils/RestaurantList.js';
function Body() {
  const[FilteredList,setFilter] = useState(restaurantList);
  function filterTopRated() {
    const topRated = restaurantList.filter((restaurant) => {
      return restaurant.rating >= 4.2;
    });
    setFilter(topRated); // Update state with filtered list
    console.log(topRated);
  }

  return (
    
    <div className= "body">
        <div className={styles.filter}>
          <button className={styles.filterbtn} onClick={filterTopRated}>Top Rated restaurants</button>
          {/* <button className={styles.delivery} onClick={}>Near & Fast</button> */}
        </div>
        <div className={styles.restrocontainer}>
          {
            FilteredList.map((restaurant,index)=>(
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