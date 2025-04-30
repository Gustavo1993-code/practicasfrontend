import React from 'react';
import { List, Button } from 'antd';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <List.Item
      actions={[
        <Button type="primary" danger onClick={() => onDelete(todo.id)}>
          Eliminar
        </Button>,
      ]}
    >
      {todo.text}
    </List.Item>
  );
};

export default TodoItem;
