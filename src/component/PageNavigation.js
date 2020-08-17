import React from 'react';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/authorization';
import { connect } from 'react-redux';
import routes from '../routes';

const PageNavigation = ({ isAuthenticated }) => {
  return (
    <div className="navLink__container">
      <NavLink
        exact
        to={routes.HOME}
        className="navLink__item"
        activeClassName="navLink__item--active"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={routes.CONTACTS}
          className="navLink__item"
          activeClassName="navLink__item--active"
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(PageNavigation);
