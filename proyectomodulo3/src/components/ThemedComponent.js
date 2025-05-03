import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from 'antd';
import { BulbOutlined, MoonOutlined } from '@ant-design/icons';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: 'center', marginBottom: 20 }}>
      <Button
        type="default"
        shape="round"
        icon={theme === 'light' ? <MoonOutlined /> : <BulbOutlined />}
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </Button>
    </div>
  );
}

export default ThemedComponent;
