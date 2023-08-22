import React from 'react'

export default function Login() {
  return (
    <div className="flotingbox">
      {/* <label htmlFor="cut"> */}
        <button name="cut" id="cut" ><i class="fa-solid fa-xmark" id="cut"></i>
        </button>
      {/* <input type="checkbox" name="cut" id="cut" hidden /> */}
      {/* <i class="fa-solid fa-xmark" id="cut"></i></label> */}
        <h1 className='login'>Login</h1>
      <p className='username'>Username</p>
      <input type="text" name='usernamei' id='usernamei' placeholder='username'/>
      <p className='password'>Password</p>
      <input type="text" name="passwordi" id="passwordi" placeholder='password' />
      <div className="button">
      <button id='Login'>Login</button>
      <button id='Sign up'>Sign up</button>
      </div>
    </div>
  )
}
