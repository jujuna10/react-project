import React from 'react'
import x from '../assets/x-mark.png';
import google from '../assets/google2.png';
import apple from '../assets/apple.png';
import facebook from '../assets/communication.png';





export default function Registre(props) {
  return (
    props.value[0] && <div className='registration'>
        <div className='rame'>
    
        </div>
        <form className='form'>
          <div className='image' onClick={() => props.value[1](false)}>
            <img src={x} width={20}/> 
          </div>
          <span id='create'>Create an account or log in</span>
          <p>Log in below or create a new Wolt account.</p>
          <div className="buttons">
            <div className='google2'>
              <img src={google} width={20} />
              <span>Cointinue with Google</span>
            </div>
            <div className='appleLogo'>
              <img src={apple} width={20} />
              <span>Cointinue with Apple</span>
            </div>
            <div className='facebook'>
              <img src={facebook} width={20} />
              <span>Cointinue with Facebook</span>
            </div>
          </div>
        </form>

    </div>
  )
}
