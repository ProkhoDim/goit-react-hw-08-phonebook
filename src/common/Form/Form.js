import React, { Component } from 'react';
import styles from './Form.module.css';
import Input from '../Input';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const errorNotification = (text, closeDelay = 1500) =>
  toast.error(text, {
    position: 'top-right',
    autoClose: closeDelay,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

class Form extends Component {
  state = {};

  componentDidMount() {
    this.setState({ ...this.props.initialState });
  }

  handleClick = e => {
    e.preventDefault();

    const { onSubmit } = this.props;

    const isKeyNotInState = Object.keys(this.state).some(
      itm => !this.state[itm],
    );

    if (isKeyNotInState) {
      errorNotification(`Please fill in all the fields!`, 2500);
      return;
    }

    onSubmit({ ...this.state });
    this.formReset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  formReset = () => {
    this.setState({ ...this.props.initialState });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.handleClick} className={styles.form}>
          {Object.keys(this.state).map(item => (
            <div key={item}>
              <Input
                name={item}
                value={this.state[item]}
                text={item}
                type={item}
                onChange={this.handleChange}
              />
            </div>
          ))}
          <button type="submit" className={styles.form__btn}>
            {this.props.btnText}
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default Form;
