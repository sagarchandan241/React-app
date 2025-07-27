import { CDN_URL } from "../utils/constant";

const ItemList=({items}) => {
    console.log(items);
    return (
        
        <div>
            {items.map((item) =>(<div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-300 flex justify-between items-center gap-4">
                <div className=" mb-4 w-9/12">
                <div className="my-2 text-left ">
                    <p className="text-lg font-semibold mb-2">{item?.card?.info.name}</p>
                    <p className="text-m ">₹ {item?.card?.info.price ? item?.card?.info.price / 100 : item?.card?.info.defaultPrice/100}</p>
                </div>
                <p className="text-s text-left text-gray-500">{item?.card?.info?.description}</p>
                </div>
                <div className="relative w-3/12 mb-4 " >
                <img src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} className=" rounded-2xl w-full h-40"/>
                <button className="bg-white p-2 rounded-xl shadow-xl border-1 border-gray-400 absolute w-30 bottom-[-10px] left-2/12 text-green-600 font-bold">ADD +</button>
                </div>
                </div>) )}
                
        </div>
    )
};

export default ItemList; 