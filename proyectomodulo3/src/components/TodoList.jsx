import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.tasks);

  const sortedTodos = [...todos].sort((a, b) => a.done - b.done);

  return (
    <ul>
      {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </ul>
  );
};

export default TodoList;