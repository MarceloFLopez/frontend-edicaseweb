import React, { useState } from 'react';
import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Login bem-sucedido');
        // Salvar o token, se necessário
        localStorage.setItem('token', data.token);
        // onsole.log('Token:', data.token);
        // Redirecionar ou executar ações adicionais
      } else {
        setMessage(data.message || 'Erro ao realizar login');
      }
    } catch (error) {
      console.error('Erro de rede ou servidor:', error);
      setMessage('Erro de rede ou servidor');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            />
        </div>
        <button type="submit">Login</button>
            {message && <div className="login-xmessage">{message}</div>}
      </form>
      
    </div>
  );
};

export default Login;
