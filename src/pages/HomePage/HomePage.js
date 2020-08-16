import React from 'react';
import styles from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/authorization';
import { connect } from 'react-redux';

const HomePage = ({ isAuthenticated }) => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.preTitle}>Welcome to</p>
      <h2 className={styles.mainTitle}>Phonebook</h2>
      {isAuthenticated ? (
        <NavLink to="/contacts" className={styles.getStartBtn}>
          <span className={styles.btnText}>Get start</span>
        </NavLink>
      ) : (
        <NavLink to="/login" className={styles.getStartBtn}>
          <span className={styles.btnText}>Get start</span>
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(HomePage);
