import React from 'react'
import apple from '../assets/images.webp';
import google from '../assets/google.png';
import application from '../assets/application.png';




export default function Download() {
  return (
    <div className='download'>
        <div className='all'>
            <div className='title'>
                <p>Honey, we’re not cooking tonight</p>
            </div>

            <div className='text'>
                <p>Get the Apple-awarded Wolt app and choose from 40,000 restaurants and hundreds of stores in 20+ countries. Discover and get what you want – our courier partners bring it to you.</p>
            </div>

            <div className='download-app'>
                <div className='app'>
                    <div>
                        <img src={apple} width={50}/>
                    </div>
                    <div>
                        <p id='downl'>Download on the</p>
                        <p id='store'>App Store</p>
                    </div>
                </div>

                <div className='google'>
                    <div>
                        <img src={google} width={35}/>
                    </div>
                    <div>
                        <p id='downl'>GET IT ON</p>
                        <p id='store'>Google Play</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="image">
            <img src={application} alt="" />

        </div>
        
    </div>
  )
}
