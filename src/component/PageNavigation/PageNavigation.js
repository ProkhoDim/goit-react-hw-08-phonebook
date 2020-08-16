import React from 'react';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/authorization';
import { connect } from 'react-redux';

const PageNavigation = ({ isAuthenticated }) => {
  return (
    <div className="navLink__container">
      <NavLink
        exact
        to="/"
        className="navLink__item"
        activeClassName="navLink__item--active"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
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
