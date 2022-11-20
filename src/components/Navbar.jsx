import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/styles/Navbar.css";
import LanguageBtn from './LanguageBtn';
import Searcher from './Searcher';

function Navbar() {

  const location = useLocation();
  const classNameActive = (route) => {
    if (location.pathname === route.to) {
      return "active-item";
    };
  }

  return (
    <div className='navbar'>
      <div className='navbar-container1'>
        <div className='navbar-container2'>
          <div className={`title-container`}>
            <h2 className={`title`}>MOVIEAPP</h2>
          </div>
          
          <div className={`texts-container`}>
            {routes.map((route) => {
              return (
                <li 
                  className={`text-box  ${classNameActive(route)}`} 
                  key={route.to}
                >
                  <NavLink 
                    className={"text"}
                    to={route.to}
                    onClick={() => console.log(location.pathname)}
                  >
                    {route.text}
                  </NavLink>
                </li>
              )
            })}
            {/* <div className={`text-box`}>
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
            </div> */}
          </div>
          <div className={`multi-container`}>
            <Searcher />
            <LanguageBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
});
routes.push({
  to: "/trending",
  text: "Trending Movies",
});
routes.push({
  to: "/categories",
  text: "Categories",
});
routes.push({
  to: "/popular",
  text: "Popular",
});
routes.push({
  to: "/upcoming",
  text: "Upcoming",
});

export default Navbar;