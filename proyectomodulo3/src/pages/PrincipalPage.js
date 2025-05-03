import React, { useContext } from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';  // Agregar íconos para tema claro/oscuro
import { Routes, Route, useNavigate, useLocation  } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';  // Importa el contexto de autenticación
import { ThemeContext } from '../contexts/ThemeContext';  // Importa el contexto de tema
import Page1 from './Page1';  // Importa Page1
import Page2 from './Page2';  // Importa Page2
import Page3 from './Page3';

const { Header, Content, Sider } = Layout;

const PrincipalPage = () => {
  const { logout } = useContext(AuthContext);  // Accede al contexto de autenticación
  const { theme, toggleTheme } = useContext(ThemeContext);  // Accede al contexto de tema
  const navigate = useNavigate();  // Hook de navegación
  const location = useLocation();  // Hook para obtener la ubicación actual de la ruta

  const items = [
    {
      key: '1',
      icon: <LaptopOutlined />,
      label: 'Page 1',
      onClick: () => navigate('/principal/page1'),
    },
    {
      key: '2',
      icon: <NotificationOutlined />,
      label: 'Page 2',
      onClick: () => navigate('/principal/page2'),
    },

    {
      key: '4',
      icon: <NotificationOutlined />,
      label: 'Page 3',
      onClick: () => navigate('/principal/page3'),
    },

    {
      key: '3',
      icon: <UserOutlined />,
      label: 'Cerrar sesión',
      onClick: () => {
        logout();  // Cerrar sesión
        navigate('/');  // Redirigir al login
      },
    },
  ];

  const getBreadcrumbItems = () => {
    if (location.pathname.includes('page1')) {
      return [{ title: 'Principal' }, { title: 'Page 1' }];
    } else if (location.pathname.includes('page2')) {
      return [{ title: 'Principal' }, { title: 'Page 2' }];
    }
    return [{ title: 'Principal' }];
    
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        color: '#fff',
        textAlign: 'center',
        fontSize: '24px',
        background: theme === 'light' ? '#1890ff' : '#1f1f1f',
      }}>
        Gustavo Suntaxi
      </Header>

      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          />
          <Button
        type="text"
        icon={theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
        onClick={toggleTheme}  // Llamamos a la función toggleTheme para cambiar el tema
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          fontSize: '24px',
          background: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#333' : '#fff',
        }}
      />
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb
            items={getBreadcrumbItems()}
            style={{ margin: '16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: theme === 'light' ? '#fff' : '#141414',
              borderRadius: '8px',
            }}
          >
            <Routes>
              <Route path="page1" element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
            </Routes>
                
            
          </Content>
        </Layout>
      </Layout>

      
    </Layout>
  );
};

export default PrincipalPage;
