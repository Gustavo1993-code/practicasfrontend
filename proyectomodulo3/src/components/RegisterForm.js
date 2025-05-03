import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { registerUser } from '../api/authApi';

function RegisterForm({ onBackToLogin }) {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const { nombre, apellido, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      message.error('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await registerUser(nombre, apellido, email, password);

      if (response.success) {
        message.success('¡Usuario registrado exitosamente!');
        onBackToLogin(); // Volver al login
      }
    } catch (error) {
      message.error(error.message || 'Error al registrar usuario');
    }
  };

  return (
    <Card title="Registro de Usuario" style={{ width: 350, margin: 'auto', marginTop: 50 }}>
      <Form form={form} name="register" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[{ required: true, message: 'Ingrese su nombre' }]}
        >
          <Input placeholder="Nombre" />
        </Form.Item>

        <Form.Item
          name="apellido"
          label="Apellido"
          rules={[{ required: true, message: 'Ingrese su apellido' }]}
        >
          <Input placeholder="Apellido" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Correo"
          rules={[
            { required: true, message: 'Ingrese su correo' },
            { type: 'email', message: 'El correo no es válido' }
          ]}
        >
          <Input placeholder="Correo" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[{ required: true, message: 'Ingrese su contraseña' }]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirmar Contraseña"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Confirme su contraseña' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Las contraseñas no coinciden'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirmar Contraseña" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Registrarse
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="link" onClick={onBackToLogin}>
            ¿Ya tienes cuenta? Inicia sesión
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default RegisterForm;
