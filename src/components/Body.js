import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";



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
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (<OfflinePage /> );

    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="flex items-center justify-around m-4">
                <div className="flex items-center">
                    <input type="text" className="border-2  py-3 px-1 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500  rounded" value={text} placeholder="Search Restauratant" onChange={(e) => {setText(e.target.value);
                    const filteredRestaurant = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(text.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }
                    }></input>
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(text.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }} className="bg-red-100 text-xl px-2 py-[10px] border-2 cursor-pointer">Search</button>
                </div>
                <button className="bg-orange-500 text-xl font-bold p-2 text-white cursor-pointer border-2 border-solid " onClick={() => { 
                    const filterList = listOfRestaurant.filter((res) => 
                    parseFloat(res.info.avgRating) > 4.3                   
                );
               setfilteredRestaurant(filterList);
            }}>Top Rated Restaurant</button>

            </div>
            <div className="flex flex-wrap gap-4  m-8  w-[calc(100%-55px)]">

                {
                    filteredRestaurant.map(restaurant => (
                        <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id} ><RestaurantCard  resData={restaurant} /></Link>
                    ))
                }
               
                
               
            </div>
        </div>
    )
};

export default Body;

