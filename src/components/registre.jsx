import React, { useEffect, useState } from 'react';
import x from '../assets/x-mark.png';
import google from '../assets/google2.png';
import apple from '../assets/apple.png';
import facebook from '../assets/communication.png';

export default function Registre({ value, setName,  }) {
  const [inputValue, setInputValue] = useState("");
  // const [show,setShow] = showProfile

  

  const handleSubmit = (e) => {
    e.preventDefault()
    setName(inputValue)
    value[1](false)
  };

  useEffect(() => {
    if (!value[0]) {
      setInputValue("");
    }
  }, [value[0]]);

  return (
    value[0] && (
      <div className='registration'>
        <div className='rame'></div>
        <form className='form' onSubmit={handleSubmit}>
          <div className='image' onClick={() => value[1](false)}>
            <img src={x} width={20} />
          </div>
          <span id='create'>Create an account or log in</span>
          <p>Log in below or create a new Wolt account.</p>
          <div className="buttons">
            <div className='google2'>
              <img src={google} width={20} />
              <span>Continue with Google</span>
            </div>
            <div className='appleLogo'>
              <img src={apple} width={20} />
              <span>Continue with Apple</span>
            </div>
            <div className='facebook'>
              <img src={facebook} width={20} />
              <span>Continue with Facebook</span>
            </div>
          </div>
          <div className="continue">
            <hr />
            <p>or continue with email</p>
            <hr />
          </div>
          <div className="inputs">
            <div className="area2">
              <input 
                type="text" 
                name="name" 
                required 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
              />
              <label className='placeholder2'>Name</label>
            </div>
            <div className="area">
              <input type="email" name="email" id="email" required />
              <label className='placeholder'>Email</label>
            </div>
            <button type='submit'>Next</button>
          </div>
        </form>
      </div>
    )
  );
}
