import React from 'react'
import Signup from './signup';

export default function Login() {
  const remove = () => {
    const flotingbox = document.body.querySelector('.flotingbox');
    flotingbox.style.display = 'none'
  }
  const signuppage = () => {
    const flotingbox = document.body.querySelector('.loginuser');
    const signup = document.body.querySelector('.signup');
    flotingbox.style.display = 'none'
    signup.style.display = 'block'

  }
  
  return (
    <div className="flotingbox">
      <div className="loginuser">
        <button name="cut" id="cut" onClick={remove} ><i className="fa-solid fa-xmark" id="cut"></i>
        </button>
        <h1 className='login'>Login</h1>
        <p className='username'>Username</p>
        <input type="text" name='usernamei' id='usernamei' placeholder='username' />
        <p className='password'>Password</p>
        <input type="text" name="passwordi" id="passwordi" placeholder='password' />
        <div className="button">
          <button id='Login'>Login</button>
          <button id='Sign up' onClick={signuppage}>Sign up</button>
        </div>
      </div>
      <div className="signup">
        <Signup/>
      </div>
    </div>
  )
}
