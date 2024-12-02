import React, { useEffect, useState } from 'react';
import './css/Dashboard.css';

const Dashboard = () => {
  const [isValidating, setIsValidating] = useState(true);
  
  // Recupera o email diretamente do localStorage
  const email = localStorage.getItem('email');
  
  const validateToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Token não encontrado, redireciona para o login
      window.location.href = '/login';
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Token válido, exibir dashboard
        setIsValidating(false);
      } else {
        // Token inválido ou revogado
        // localStorage.removeItem('token');
        // localStorage.removeItem('email');
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Erro ao validar token:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      window.location.href = '/login';
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      window.location.href = '/login';
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/revokade-token', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Remover o token e o email do localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        // Redirecionar para a página de login
        window.location.href = '/login';
      } else {
        const data = await response.json();
        console.error('Erro no logout:', data.error || 'Erro inesperado.');
        // Em caso de erro, ainda tentamos limpar o localStorage
        localStorage.removeItem('email');
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
      // Limpa os dados no localStorage e redireciona para o login
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  // Exibir indicador de carregamento enquanto valida o token
  if (isValidating) {
    return <p>Validando acesso...</p>;
  }

  return (
    <div className="dashboard-container">
      {/* Nav fixo no topo */}
      <nav className="dashboard-nav">
        <ul className="dashboard-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#users">Usuários</a></li>
        </ul>
        <div className="dashboard-user">
          <span>{email}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Sair
        </button>
      </nav>

      {/* Conteúdo principal */}
      <main className="dashboard-main">
        <h2>Bem-vindo ao Dashboard</h2>
        <p>Aqui está o conteúdo principal do seu dashboard.</p>
      </main>

      {/* Footer fixo no rodapé */}
      <footer className="dashboard-footer">
        <p>Copyright © 2024 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
