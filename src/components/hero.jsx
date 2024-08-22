import React, { useState} from "react";
import herophoto from '../assets/spaghetti-2931846_1920.jpg';
import { Typewriter } from "react-simple-typewriter";

function HeroSection(){

    return(
        <div>
            <img src={herophoto} id="hero-photo"/>
            <h1 className="effect">
                <Typewriter words = {["Something with Netflix tonight?","Pre-order for tomorrow?","You deserve this Youdeservethis.","Time for something new?","Discover and get great food.","Looking for something healthy?"]}  
                cursor loop typeSpeed={80} deleteSpeed={35} delaySpeed={2000} />
            </h1>
        </div>
    )
}

export default HeroSection;