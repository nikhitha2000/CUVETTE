import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered in useRestaurantMenu");
    fetchData();
  }, []); // Dependency array ensures useEffect re-runs if resId changes
  const fetchData = async () => {
      const data = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4372854&lng=78.3863575&restaurantId=${resId}&submitAction=ENTER`
      );
      const json = await data.json();
      console.log("API Response (json):", json);
      setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
