import React, { useState } from 'react'
import arrow from '../assets/right-arrow (1).png';


export default function City() {
    const counrties = ["georiga","usa","germany","poland","serbia","iceland","estonia","scech republic","latvia","canada","france","spain","england","italy","croatia","argentina","japan","bulgaria","turkey","azerbaijan"]
    const azerbaijan = ['kdkoddk','kdkoddk','kdkoddk','kdkoddk','kdkoddk','kdkoddk']
    const cities = [['tbilisi','batumi','kutaisi','sachkere','kaspi','gori'],['chichago','california','new-york','miami','washington','michigan'],
                    ['germany','germany','germany','germany','germany','germany'],['poland','poland','poland','poland','poland','poland'],
                    ['serbia','serbia','serbia','serbia','serbia','serbia'],['iceland','iceland','iceland','iceland','iceland','iceland'],
                    ['estonia','estonia','estonia','estonia','estonia','estonia'],['scech','scech','scech','scech','scech','scech'],
                    ['latvia','latvia','latvia','latvia','latvia','latvia'],['canada','canada','canada','canada','canada','canada'],
                    ['france','france','france','france','france','france'],['spain','spain','spain','spain','spain','spain'],
                    ['england','england','england','england','england','england'],['italy','italy','italy','italy','italy','italy'],
                    ['croatia','croatia','croatia','croatia','croatia','croatia'],['argentina','argentina','argentina','argentina','argentina','argentina'],
                    ['japan','japan','japan','japan','japan','japan'],['bulgaria','bulgaria','bulgaria','bulgaria','bulgaria','bulgaria'],
                    ['turkey','turkey','turkey','turkey','turkey','turkey'],['azerbaijan','azerbaijan','azerbaijan','azerbaijan','azerbaijan','azerbaijan']]



    const [country,setCountry] = useState("")
    const [showComponent,setShowComponent] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(null);


    const handleClick = (selectCountry,index) => {
        setCountry(selectCountry)
        setSelectedIndex(index)
        setShowComponent(!showComponent)
    }
    return (
        <div className='countrys'>
            <div id='choose'>
                <p>{country}</p>
                <p onClick={() => setShowComponent(true)} id='all-country'>all country</p>
            </div>
            <div id="country">
                {showComponent ? (
                    counrties.map((selectCountry, index) => (
                        <button key={index} onClick={() => handleClick(selectCountry, index)} className='btn'>
                            {selectCountry}
                            <img src={arrow} width={10}/>
                        </button>
                    ))
                ) : (
                    selectedIndex !== null && (
                        cities[selectedIndex].map((city, cityIndex) => (
                            <button key={cityIndex} className='btn'>
                                {city}
                            </button>
                        ))
                    )
                )}
            </div>
            <br />
        </div>
    );
}
