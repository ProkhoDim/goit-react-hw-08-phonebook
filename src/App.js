import React, { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './theme/global.css';

import { NavigationBar, PublicRoute, PrivateRoute } from './component';

import { authOperations } from './redux/authorization';

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
          <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
              <PublicRoute exact path="/" component={HomePage} />
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/contacts"
                component={LoginPage}
              />
              <PublicRoute
                path="/register"
                restricted
                redirectTo="/contacts"
                component={RegPage}
              />
              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
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
