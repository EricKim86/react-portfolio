import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const styles = {
  h2: {
    margin: '10px 0 0 0'
  },
  button: {
    margin: '10px 0 10px 0',
  },
  height: {
    height: '70vh',
  },
  margin: {
    margin: '5px 0 0 0'
  }
};


function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Name, Email, or Message is invalid!');
      return;
    }

    alert(`Message has been submitted, thank you ${name}!`);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="container" style={styles.height}>
      <h2 style={styles.h2}><i class="fas fa-phone"></i> Contact Me</h2>
      <form className="form-group">
        <label style={styles.margin} for="inputName">Name</label>
        <input
          className="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          id="inputName"
        />
        <label style={styles.margin} for="inputEmail">Email</label>
        <input
          className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
          id="inputEmail"
        />
        <div class="form-group">
          <label style={styles.margin}>Message</label>
          <textarea
            class="form-control"
            rows="8"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            id="inputMessage">
          </textarea>
        </div>
        <button style={styles.button} className="btn btn-primary" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
