import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
   

    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant , setfilteredRestaurant] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
                

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9581934&lng=72.8320729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    

    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={text} placeholder="Search Restauratant" onChange={(e) => {setText(e.target.value);
                    const filteredRestaurant = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(text.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }
                    }></input>
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(text.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }} className="search-btn">Search</button>
                </div>
                <button className="filter-btn" onClick={() => { const filterList = listOfRestaurant.filter((res) => 
                    res.info.avgRating > 4.3                   
                );
               setlistOfRestaurant(filterList);
            }}>Top Rated Restaurant</button>

            </div>
            <div className="res-container">

                {
                    filteredRestaurant.map(restaurant => (
                         <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
               
                
               
            </div>
        </div>
    )
};

export default Body;

