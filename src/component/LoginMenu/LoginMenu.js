import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginMenu = () => {
  return (
    <div className="navLink__container">
      <NavLink
        to="/login"
        className="navLink__item"
        activeClassName="navLink__item--active"
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="navLink__item"
        activeClassName="navLink__item--active"
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default LoginMenu;
