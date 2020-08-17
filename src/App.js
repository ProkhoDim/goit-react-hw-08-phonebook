import React, { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { connect } from 'react-redux';

import routes from './routes';
import { NavigationBar } from './component';
import { PublicRoute, PrivateRoute } from './common';

import { authOperations } from './redux/authorization';

import './theme/global.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: 'home-page' */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: 'contacts-page' */),
);
const RegPage = lazy(() =>
  import('./pages/RegPage' /* webpackChunkName: 'register-page' */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'login-page' */),
);

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <>
        <NavigationBar />
        <div className="Container">
          <Suspense
            fallback={
              <Loader type="ThreeDots" color="#6d6d6d" height={80} width={80} />
            }
          >
            <Switch>
              <PublicRoute exact path={routes.HOME} component={HomePage} />
              <PublicRoute
                path={routes.LOGIN}
                restricted
                redirectTo={routes.CONTACTS}
                component={LoginPage}
              />
              <PublicRoute
                path={routes.REGISTER}
                restricted
                redirectTo={routes.CONTACTS}
                component={RegPage}
              />
              <PrivateRoute
                path={routes.CONTACTS}
                redirectTo={routes.LOGIN}
                component={ContactsPage}
              />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
