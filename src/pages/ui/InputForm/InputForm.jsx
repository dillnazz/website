import React, { Component } from 'react';
import './inputForm.css' 

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // Perform any necessary actions here, such as sending data to a server
    console.log(this.state);
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='form-control'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input className='input-field' type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input className='input-field' type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Message:
            <input className='input-field' type='number' name="message" value={message} onChange={this.handleChange} />
          </label>
          <br />
          <button className='submit' type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputForm;