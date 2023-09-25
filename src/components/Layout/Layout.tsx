import React, {useEffect} from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Style.scss'

const Layout = () => {
  useEffect(()=> {
    console.log('init')
  },[])
  return (
    <>
      <nav className="navbar navbar-light fixed-top bg-light px-3">
        <NavLink className="navbar-brand" to="/Infinite-scroll">Main</NavLink>
        <NavLink className="navbar-brand" to="/scroll-page">Scroll page</NavLink>
        <NavLink className="navbar-brand" to="/profile">Profile</NavLink>
      </nav>
      <Outlet/>
    </>
  );
};

export default Layout;