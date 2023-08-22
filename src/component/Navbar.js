import React from 'react'
import Login from './Login'

export default function Navbar() {
  const funlogin = () => {
    const flotingbox = document.body.querySelector('.flotingbox');
    flotingbox.style.display = 'block'
  }
  return (
    <nav>
      <a href="/" id="doormonk" className="doormonk">Doormonk</a>
      <ul className="navlist">
        <li className="locationsearch"> <input type="text" placeholder="Location search" className="locationsearchinput" />
        </li>
        <li className="blog "><a href="#" className="butblog ">Blog</a></li>
        <li className="login"><button onClick={funlogin} className="loginsingup">Login/SignUp</button></li>
        <li className="contect"><a href="#" className="butcontect">Help</a></li>
        <li className="login"><a href="#joindoormonk" className="loginsingup">Join us</a></li>
      </ul>
      <Login />
    </nav>
  )
}
