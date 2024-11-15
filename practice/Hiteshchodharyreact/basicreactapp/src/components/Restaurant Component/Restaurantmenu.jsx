import React from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

function Restaurantmenu() {
  const { resId } = useParams();
  console.log("Restaurantmenu component rendered");

  const resInfo = useRestaurantMenu(resId); // Use dynamic resId
  console.log("resInfo in Restaurantmenu:", resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Safely destructure properties
  const { name = "Unknown Restaurant", cuisines = [], costForTwoMessage = "N/A", avgRating = "N/A" } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards = [] } =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};

  console.log("itemCards:", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.length > 0 ? cuisines.join(", ") : "Cuisine info not available"} - {costForTwoMessage}</p>
      <span>{avgRating}</span>
      <h2>Menu</h2>
      <ul>
        {Array.isArray(itemCards) && itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurantmenu;
