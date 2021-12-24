import React, { Component } from "react";
import { returnsToken } from "../services/getApi";

export class OldUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      reaponse: '',
    }

    this.buttonSubmit = this.buttonSubmit.bind(this); 
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  async buttonSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    
    const response = await returnsToken(email, password);
    localStorage.setItem('oldUserData', JSON.stringify(response));

    this.setState({ response });
  }

  render() {
    const { email, password, response } = this.state;

    console.log("response is: ", response);

    return (
      <div>
        <h3 className='mb-3 p-2'>Login</h3>
        <form className='d-flex flex-column'>
          <input
            className='mb-3 p-2'
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ this.onChange }
          />
          <input
            className='mb-3 p-2'
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.onChange }
          />
          <button 
            className='mb-3 p-2'
            type="submit"
            onClick={ this.buttonSubmit }
            style={{ width: "50%" }}
          >
            Salvar
          </button>
        </form>
        <div>
          { response
            ? <div style={{ fontSize: "2em", color: "red" }}>{ response.msg }</div>
            : <div style={{ height: "3em" }}>{ }</div>
          }
        </div>
      </div>
    )
  }
}
