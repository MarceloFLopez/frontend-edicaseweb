// // src/context/AuthContext.js

// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (authToken) {
//       axios.defaults.headers['Authorization'] = `Bearer ${authToken}`;
//       axios.get('http://localhost:3000/user')
//         .then(response => setUser(response.data))
//         .catch(error => console.error(error));
//     }
//   }, [authToken]);

//   const login = async (email, senha) => {
//     try {
//       const response = await axios.post('http://localhost:3000/login', { email, senha });
//       const token = response.data.token;
//       setAuthToken(token);
//       localStorage.setItem('token', token);
//     } catch (error) {
//       console.error('Erro ao fazer login', error);
//     }
//   };

//   const logout = () => {
//     setAuthToken(null);
//     setUser(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <AuthContext.Provider value={{ authToken, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };
