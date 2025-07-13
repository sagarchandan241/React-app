import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header =() => {
    const [btnNAme, setbtnName] = useState("Login");
   
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li><img /> <span>Cart</span></li>
                    <li><button className="login-btn" onClick={() => {
                         btnNAme === "Login" ? setbtnName("Logout") : setbtnName("Login"); 
                      
                        console.log(btnNAme);
                    }}>{btnNAme}</button></li>
                </ul>
            </div>


        </div>
    )
};

export default Header;