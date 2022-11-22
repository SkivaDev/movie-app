import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/styles/Navbar.css";
import { useMain } from '../context/main';
import LanguageBtn from './LanguageBtn';
import Searcher from './Searcher';

function Navbar() {

  const {
    config,
    setConfig,
  } = useMain();

  const location = useLocation();
  const classNameActive = (route) => {
    if (location.pathname === route.to) {
      return "active-item";
    };
  }
  ////
  const setNewConfig = (route) => {
    const newConfig = {
      ...config,
      route: route.to,
      title: route.text
    }
    setConfig(newConfig);
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
                    onClick={() => setNewConfig(route)}
                  >
                    {route.text}
                  </NavLink>
                </li>
              )
            })}

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