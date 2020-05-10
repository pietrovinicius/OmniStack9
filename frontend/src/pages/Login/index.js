import React, { useState } from 'react';
import api from '../../services/api'

export default function Login( { history }) {
    const [email, setEmail] = useState('');

    //botão de 'entrar'
    async function handleSubmit(event){
      //previnindo o form para o funcionamento padrão
      event.preventDefault();  
      console.log('============================HandleSubmit');
  
      //iniciando a api pra inserir o email no nd
      const response = await api.post('/sessions', { email });
      console.log('Resposta:' + response);
      
      const { _id } = response.data;
      console.log('Id: ' + _id);
  
      //salvando a id do user
      localStorage.setItem('user' , _id);

      //enviando o usuário pra rota dashboard
      console.log('ativacao do history.push');
      history.push('/dashboard');

    }
  
    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> E-MAIL *</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}