import React, { useEffect, useState } from 'react';

export default function Out({value2,showProfile}) {
    
    const [out,setOut] = value2
    const [show,setShow] = showProfile

    const handleNo = () => {
        setOut(false)
        // setShow(false)
    }
    
    const handleYes = () => {
        setOut(false)
        setShow(!show)
    }


    // useEffect(() => {
        
    //     const timer = setTimeout(() => {
    //         setShow(true)
    //     },2000)

    //     return () => clearInterval(timer)

    // },[show])

   
    


    return (
        <div className='rame2'>
            {out && (
                <div className='out'>
                    <p>Are you sure you want to leave?</p>
                    <div className='butts'>
                        <button id='yes' onClick={handleYes}>Yes</button>
                        <button id='no' onClick={handleNo}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}
