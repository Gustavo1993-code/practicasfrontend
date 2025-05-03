import React, { useState, useContext } from 'react';
import { Form, Input, Button, Card, message, Layout } from 'antd';
import { loginUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import RegisterForm from './RegisterForm';  // Si quieres permitir registro desde Login
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';  // Importa AuthContext
import ThemedComponent from './ThemedComponent';

const { Header, Content, Footer } = Layout;

function LoginForm() {
  const [isRegistering, setIsRegistering] = useState(false); // Estado para mostrar el registro
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);  // Accede a la función login del contexto
  const navigate = useNavigate();  // Hook de navegación para redirigir

  const onFinish = async (values) => {
    try {
      const data = await loginUser(values.email, values.password);

      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));  // Guarda el usuario en localStorage
        login();  // Actualiza el estado de autenticación
        message.success('¡Inicio de sesión exitoso!');
        navigate('/principal');  // Redirige a la página principal
      }
    } catch (error) {
      message.error(error.message || 'Correo o contraseña incorrectos');
    }
  };

  if (isRegistering) {
    return <RegisterForm onBackToLogin={() => setIsRegistering(false)} />;  // Permite volver al login
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        color: '#fff',
        textAlign: 'center',
        fontSize: '24px',
        background: theme === 'light' ? '#1890ff' : '#1f1f1f'
      }}>
        Aplicación de Acceso
      </Header>

      <Content style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme === 'light' ? '#fff' : '#141414',
        transition: 'all 0.3s'
      }}>
        <ThemedComponent />
        <Card title="Inicio de Sesión" style={{ width: 300, margin: 'auto', marginTop: 50 }}>
          <Form name="login" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Por favor ingrese su correo!' }]}>
              <Input placeholder="Correo" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}>
              <Input.Password placeholder="Contraseña" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Iniciar sesión
              </Button>
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="link" onClick={() => setIsRegistering(true)}>
                ¿No tienes cuenta? Regístrate
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>

      <Footer style={{
        textAlign: 'center',
        background: theme === 'light' ? '#f0f2f5' : '#1f1f1f',
        color: theme === 'light' ? '#000' : '#aaa'
      }}>
        Derechos Reservados UTE ©2025 Creado por Gustavo Suntaxi
      </Footer>
    </Layout>
  );
}

export default LoginForm;
