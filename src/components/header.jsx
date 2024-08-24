
      // <p id="user">
      //   {showUser && props.name ? (
      //     <>
      //       <img src={userIcon} width="25" alt="user icon" /> {props.name}
      //       <button id="out" onClick={handleLogClick}>Log out</button>
      //     </>
      //   ) : null}
      // </p>
      // {/* <Out value2={[showUser, setShowUser]} hideUser={handleHideUser} /> */}
      // {/* <Registre value={value} setName={handleSignUp} /> */}




import React, { useState } from "react";
import logo from '../assets/wolt-delivery1310.logowik.com.webp';
import userIcon from '../assets/user.png';
import Out from "./Out";
import Registre from "./registre";
      
function Header(props) {

  const [out,setOut] = useState(false)
  const [show,setShow] = useState(true)

  const handleClick = () => {
    setOut(!out)
  }

  return (
    <div className="navbar">
      <img src={logo} alt="logo" id="logo"/>
                  
        <div className="register">
          <button id="in">Sign In</button>
          <button id="up" onClick={() => props.value[1](true)}>Sign Up</button>
        </div>
        <p id="user">
          {show && props.name ? (
            <>
              <img src={userIcon} width="25" alt="user icon" /> {props.name}
              <button id="out" onClick={handleClick}>Log out</button>
            </>
            ) : null}
        </p>
        <Out value2={[out, setOut]} showProfile={[show, setShow]} />
        {/* <Registre value={[click, setClick]} setName={setName} showProfile={[show,setShow]} /> */}


      
    </div>
  );
}
      
export default Header;
      