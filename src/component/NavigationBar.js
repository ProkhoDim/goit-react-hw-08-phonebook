import React from 'react';
import { LoginMenu, UserNavigation, PageNavigation } from './index';
import { authSelectors } from '../redux/authorization';
import { connect } from 'react-redux';

const NavigationBar = ({ isAuthenticated }) => {
  return (
    <div className="containerFluid">
      <nav className="navBar Container">
        <PageNavigation />
        {isAuthenticated ? <UserNavigation /> : <LoginMenu />}
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(NavigationBar);
