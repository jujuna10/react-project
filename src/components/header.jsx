import React, { useState } from "react";
import logo from '../assets//wolt-delivery1310.logowik.com.webp';
import Registre from "./registre";


function Header(props){

    const [showRegi,setShowRegi] = useState(false)
    const handleFocus = () => {
        setShowRegi(!true)
        
    }
   

    return(
        <div className="navbar">
            <img src={logo} alt="logo" id="logo"/>
            
            <div className="register">
                <button id="in">Sign In</button>
                <button id="up" onClick={() => props.value[1](true)}>Sign Up</button>
                {showRegi && <Registre />}
            </div>

            
        </div>
    )
}

export default Header