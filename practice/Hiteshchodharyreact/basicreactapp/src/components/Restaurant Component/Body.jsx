// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styles from "../Restaurant Component/Body.module.css";
import Res from "../Restaurant Component/Res.jsx";
import restaurantList from '../../utils/RestaurantList.js';
import useOnlineStatus from '../../utils/useOnlineStatus.js';
import Shimmer from './Shimmer.jsx';

function Body() {
  const [FilteredList, setFilter] = useState(restaurantList);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("FilteredList:", FilteredList);
  console.log("restaurantList:", restaurantList);
  // Uncomment if you need to fetch data from an API
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   try {
  //     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const json = await response.json();
  //     console.log(json);
  //     setFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   }
  // }

  function filterTopRated() {
    const topRated = restaurantList.filter((restaurant) => restaurant.rating >= 4.2);
    setFilter(topRated);
    console.log(topRated);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    const filteredRestaurants = restaurantList.filter((restaurant) =>
      restaurant.resName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilter(filteredRestaurants);
  }

  const onlinestatus = useOnlineStatus();
  console.log("Online status in Body component:", onlinestatus);
  if(onlinestatus === false){
    
    return <h1>Looks like you are offline please check your internet connection</h1>
  }

  if (FilteredList.length === 0) {
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchinput}
          placeholder="Search Restaurants"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.filter}>
        <button className={styles.filterbtn} onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
        {/* <button className={styles.delivery}>Near & Fast</button> */}
      </div>
      <div className={styles.restrocontainer}>
        {FilteredList.map((restaurant, index) => (
          <Res
            key={index}
            resName={restaurant.resName}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            price={restaurant.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
