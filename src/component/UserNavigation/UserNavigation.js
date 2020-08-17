import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/authorization';
import styles from './UserNavigation.module.css';

const UserNavigation = ({ user, onLogout }) => {
  return (
    <div className="navLink__container">
      <p className={styles.userName}>{user}</p>
      <div>
        <button onClick={onLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: authSelectors.currentUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
