import React from 'react'

export default function Signup() {
    const remove = () => {
        const flotingbox = document.body.querySelector('.flotingbox');
        flotingbox.style.display = 'none'
      }
    const backto_log_in = () => {
        const flotingbox = document.body.querySelector('.loginuser');
        const signup = document.body.querySelector('.signup');
        flotingbox.style.display = 'block'
        signup.style.display = 'none'
      }
    return (
        <div>
            <button name="cut" id="cut" onClick={remove} ><i className="fa-solid fa-xmark" id="cut"></i>
            </button>
            <p className='email'>Email ID</p>
            <input type="text" name='usernamei' id='usernamei' placeholder='Email ID' />
            <p className='phoneno'>Phone Number</p>
            <input type="text" name='usernamei' id='usernamei' placeholder='Email ID' />
            <p className='password'>Password</p>
            <input type="text" name="passwordi" id="passwordi" placeholder='password' />
            <div className="button">
                <button id='Signup'>Sign up</button>
                <button id='Login' onClick={backto_log_in}>Back to Login</button>
            </div>
        </div>
    )
}
