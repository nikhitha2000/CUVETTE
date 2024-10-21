// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styles from "../Restaurant Component/Body.module.css";
import Res from "../Restaurant Component/Res.jsx";
import restaurantList  from '../../utils/RestaurantList.js';
import Shimmer from './Shimmer.jsx';
function Body() {
  const[FilteredList,setFilter] = useState(restaurantList);
  const[searchTerm,setsearchTerm] = useState("");
  useEffect(()=>{
    fetchData();
  },[])
  async function fetchData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
     setFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  function filterTopRated() {
    const topRated = restaurantList.filter((restaurant) => {
      return restaurant.rating >= 4.2;
    });
    setFilter(topRated); // Update state with filtered list
    console.log(topRated);
  }
  function handleSearchChange(){
    setsearchTerm(event.target.value);
    const filteredRestaurants = restaurantList.filter((restaurant) => {
     return restaurant.resName.toLowerCase().includes(event.target.value.toLowerCase());
  })
  setFilter(filteredRestaurants); // Update state with filtered list
  }

  if(FilteredList.length === 0){
    return <Shimmer/>
  }
  return (
    
    <div className= "body">
      <div className= {styles.search}>
         <input type="text" 
          className={styles.searchinput}
          placeholder="Search Restaurants" 
          value={searchTerm} 
          onChange={handleSearchChange}/>
      </div>
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