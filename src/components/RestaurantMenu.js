import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

if(resInfo === null ){
   return  <Shimmer />;
}
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info ?? {};
  const { name: restaurantName, totalRatingsString } = restaurantInfo;

  // ✅ Safe one-line destructuring for itemCards
  const { itemCards = [] } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card ?? {};


     return (
    <div className="res-menu-container">
      <h1>{restaurantName}</h1>
      <h2>{totalRatingsString}</h2>
      <div className="menu-list-container">
        <ul>
          {itemCards.map((item) => {
            const info = item?.card?.info;
            return (
              <li key={info?.id}>
                {info?.name}
                <p>Rs {info?.price ? info.price / 100 : info?.defaultPrice / 100}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;