import { CDN_URL } from "../utils/constant";
 const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId, name, cuisines, costForTwo,avgRating,sla} = resData.info;
    const slaString = sla?.slaString;
       
    return(
        <div className="w-70 p-2 min-h-105 bg-gray-110 hover:bg-gray-200 hover:shadow-xl rounded-xl border-2 ">
            
            <img src={CDN_URL + cloudinaryImageId} className="rounded  h-50 mb-2 relative w-full "/>
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

   //Higher Order Component
   // input RestaurantCard => RestaurantCardDiscount    

export const withDiscountedLabel =(RestaurantCard) => {
    return (props) => {
        const discount = props?.resData?.info?.aggregatedDiscountInfoV3;
        return (
            <div className="relative w-full">
                {discount && 
                (<label className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-br-md z-10">{discount.header} {discount.subHeader}</label>)}
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

   export default RestaurantCard;