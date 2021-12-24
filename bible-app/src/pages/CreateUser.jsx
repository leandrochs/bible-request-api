import React from 'react';
import { createUser } from '../services/getApi';

export class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      reaponse: '',
    }

    this.buttonSubmit = this.buttonSubmit.bind(this); 
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  async buttonSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    localStorage.setItem('CreateUserData', JSON.stringify({ name, email, password }));
    
    const response = await createUser(name, email, password);
    this.setState({ response });
  }

  render() {
    const { name, email, password, response } = this.state;

    return (
      <div>
        <h3 className='mb-3 p-2'>Criar Novo Usuário</h3>
        <form className='d-flex flex-column'>
          <input
            className='mb-3 p-2'
            type="text"
            name="name"
            placeholder="Username"
            value={ name }
            onChange={ this.onChange }
          />
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
