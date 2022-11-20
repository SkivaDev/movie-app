import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container1'>
        <div className='navbar-container2'>
          <div className={`logo-container`}>
            <span>LogoPage</span>
          </div>
          <div className={`texts-container`}>
            <div className={`text-box`}>
              <NavLink className={`text`} to={"/"}>Home</NavLink>
            </div>
            <div className={`text-box`}>
              <NavLink className={`text`} to={"/trending"}>Trending Movies</NavLink>
            </div>
            <div className={`text-box`}>
              <NavLink className={`text`} to={"/categories"}>Categories</NavLink>
            </div>
            <div className={`text-box`}>
              <NavLink className={`text`} to={"/popular"}>Popular</NavLink>
            </div>
            <div className={`text-box`}>
              <NavLink className={`text`} to={"/upcoming"}>Upcoming</NavLink>
            </div>
          </div>
          <div className={`search-container`}>
            <div className={`input-box`}>
              <input className={`input`} type="text" placeholder='Search'/>
              <span className={`logo`}>i</span>
            </div>
          </div>
          <div className={`language-container`}>
            <ul>
              <span>(**)</span>
              {/* <div>Aqui va la opciones de ingles o español</div> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar