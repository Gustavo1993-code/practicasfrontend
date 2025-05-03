import React, { useContext } from 'react';

import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import { ConfigProvider, theme as antdTheme  } from 'antd';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Importa Router y Routes

import PrincipalPage from './pages/PrincipalPage';


function AppContent() {
  const { theme } = useContext(ThemeContext);  // Usamos el contexto de Theme
  const { isAuthenticated } = useContext(AuthContext);  // Usamos el contexto de Auth

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'light' ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/principal" /> : <LoginForm />} /> 
          <Route path="/principal/*" element={isAuthenticated ? <PrincipalPage /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>  
      <AuthProvider> 
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
