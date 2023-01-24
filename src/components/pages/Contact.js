import React, { useState } from 'react';

const styles = {
  button: {
    margin: '10px 0 0 0',
  },
};


function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === 'Name' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Message has been submitted.  Thank you ${name}!`);
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <form className="form-group">
        <label for="inputName">Name</label>
        <input
          className="form-control"
          value={name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          id="inputName"
        />
        <label for="inputEmail">Email</label>
        <input
          className="form-control"
          value={email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          id="inputEmail"
        />
        <div class="form-group">
          <label>Message</label>
          <textarea class="form-control" rows="8"></textarea>
        </div>
        <button style={styles.button} className="btn btn-primary" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
