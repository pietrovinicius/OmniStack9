import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    //previnindo o form para o funcionamento padrão
    event.preventDefault();  
    console.log('============================HandleSubmit no botão submit');
    console.log('Enviando: ' + email);

    //iniciando a api pra inserir o email no nd
    const response = await api.post('/sessions', { email });
    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> E-MAIL *</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange= {event => setEmail(event.target.value)}
             />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  ); 
}

export default App;