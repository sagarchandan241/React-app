import { CDN_URL } from "../utils/constant";
 const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId, name, cuisines, costForTwo,avgRating,sla} = resData?.info;
    const slaString = sla?.slaString;
       
    return(
        <div className="w-70 p-2 min-h-110 bg-gray-110 hover:bg-gray-200 hover:shadow-xl rounded-xl border-2 ">
            
            <img src={CDN_URL + cloudinaryImageId} className="rounded w-[100%] h-50 mb-2"/>
             <h3 className="text-xl font-bold text-center">{name}</h3>
              <div className="flex justify-between items-center m-4">
                
                <p className="text-green-700 font-bold ">{avgRating} stars</p>
                <p className=" font-bold">{slaString}</p>
                
            </div>
            <p className="mt-2 text-center">{cuisines.join(", ")}</p>
            <h4 className=" text-center font-bold py-2">{costForTwo }</h4>
           
            
           
        </div>
    );
   };

   export default RestaurantCard;