import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ name, value, text, onChange, type }) => {
  return (
    <>
      <label className={styles.label}>
        <span className={styles.span}>{text}</span>
        <input
          type={
            type === 'email' || type === 'password' || type === 'number'
              ? type
              : 'input'
          }
          name={name}
          onChange={onChange}
          value={value}
          className={styles.input}
        />
      </label>
    </>
  );
};

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Input;
