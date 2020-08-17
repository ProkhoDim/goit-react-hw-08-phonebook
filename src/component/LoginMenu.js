import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const LoginMenu = () => {
  return (
    <div className="navLink__container">
      <NavLink
        to={routes.LOGIN}
        className="navLink__item"
        activeClassName="navLink__item--active"
      >
        Login
      </NavLink>
      <NavLink
        to={routes.REGISTER}
        className="navLink__item"
        activeClassName="navLink__item--active"
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default LoginMenu;
