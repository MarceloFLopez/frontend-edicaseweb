import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove o token ao fazer logout
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bem-vindo ao Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Sair
        </button>
      </header>
      <main className="dashboard-main">
        <h2>O que você deseja fazer?</h2>
        <ul className="dashboard-options">
          <li>Gerenciar Usuários</li>
          <li>Configurações</li>
          <li>Relatórios</li>
        </ul>
      </main>
    </div>
  );
};

export default Dashboard;
