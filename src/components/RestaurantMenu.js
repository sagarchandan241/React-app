import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
    
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
 console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
      c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );


     return (
    <div className="my-0 mx-auto mt-4 text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurantName}</h1>
      <h3 className="font-bold text-lg">{totalRatingsString}</h3>
      <div className="menu-list-container">
        {/* <ul>
          {itemCards.map((item) => {
            const info = item?.card?.info;
            return (
              <li key={info?.id}>
                {info?.name}
                <p>Rs {info?.price ? info.price / 100 : info?.defaultPrice / 100}</p>
              </li>
            );
          })}
        </ul> */}

        { 
          categories.map((category, index) => (<RestaurantCategory 
            key={category?.card?.card?.categoryId}
             data={category?.card?.card }
             showItems = {index ===  showIndex }  
             setShowIndex = {() =>
              setShowIndex(index === showIndex ? null : index)}
             
             />))
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;