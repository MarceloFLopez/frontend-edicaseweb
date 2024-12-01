import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Welcome.css'; // Estilo personalizado

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Bem-vindo ao Sistema</h1>
      <p>Gerencie usuários e acesso com segurança!</p>
      <button className="welcome-btn" onClick={() => navigate('/login')}>
        Entrar
      </button>
    </div>
  );
};

export default Welcome;
