import { CDN_URL } from "../utils/constant";
 const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId, name, cuisines, costForTwo,avgRating,sla} = resData?.info;
    const slaString = sla?.slaString;
       
    return(
        <div className="res-card">
            
            <img src={CDN_URL + cloudinaryImageId} style={{width: "100%", maxWidth: "200px",height: "200px",
    borderRadius: "10px"}}/>
             <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>{costForTwo }</h4>
            <div className="rating">
                
                <p>{avgRating} stars</p>
                <p>{slaString}</p>
                
            </div>
            
           
        </div>
    );
   };

   export default RestaurantCard;