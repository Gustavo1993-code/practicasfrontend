import React from 'react';
import { List } from 'antd';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} />
      )}
      style={{ marginTop: '20px' }}
    />
  );
};

export default TodoList;
