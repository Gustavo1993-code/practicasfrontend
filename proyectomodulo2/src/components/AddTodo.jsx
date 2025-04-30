import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';

const AddTodo = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim() === '') return;
    onAddTodo(inputValue.trim());
    setInputValue('');
  };

  return (
    <Form layout="inline" onFinish={handleSubmit}>
      <Form.Item>
        <Input
          placeholder="Nueva tarea..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Añadir
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTodo;
