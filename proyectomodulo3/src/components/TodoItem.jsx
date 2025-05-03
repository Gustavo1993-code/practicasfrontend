import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo, toggleDone } from '../redux/todosSlice';
import './TodoItem.css';

const TodoItem = ({ id, text, done }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    if (editMode && editedText.trim() !== '') {
      dispatch(editTodo({ id, text: editedText }));
    }
    setEditMode(!editMode);
  };

  return (
    <li className={`todo-item ${done ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => dispatch(toggleDone(id))}
      />
      {editMode ? (
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{text}</span>
      )}
      <button onClick={handleEdit}>{editMode ? 'Guardar' : 'Editar'}</button>
      <button onClick={() => dispatch(removeTodo(id))}>Eliminar</button>
    </li>
  );
};

export default TodoItem;