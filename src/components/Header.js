import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() => {
    const [btnNAme, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
   
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-red-200">
            <div className="logo-container">
                <Link to="/"><img className="w-30 rounded-xl border-2" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-items ">
                <ul className="flex gap-8 mx-8 items-center">
                    <li className="text-lg font-bold ">Online Status: {onlineStatus === true ? "Online ✅" : "Offline 🔴"}</li>
                    <li className="text-lg font-bold hover:underline transition-all duration-500 ease-in"><Link to="/">Home</Link></li>
                    <li className="text-lg font-bold hover:underline decoration-solid"><Link to="/about">About US</Link></li>
                    <li className="text-lg font-bold hover:underline decoration-solid"><Link to="/contact">Contact Us</Link></li>
                    <li className="text-lg font-bold hover:underline decoration-solid"><Link to="/grocery">Grocery</Link></li>
                    <li className="text-lg font-bold hover:underline decoration-solid"><Link to=""><img /> <span>Cart</span></Link></li>
                    <li className="text-lg font-bold w-40"><button className="border-2 rounded-xl p-4 bg-gray-100 cursor-pointer shadow-lg" onClick={() => {
                         btnNAme === "Login" ? setbtnName("Logout") : setbtnName("Login"); 
                      
                        console.log(btnNAme);
                    }}>{btnNAme}</button></li>
                </ul>
            </div>


        </div>
    )
};

export default Header;