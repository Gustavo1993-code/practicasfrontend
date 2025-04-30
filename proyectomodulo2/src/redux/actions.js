export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODOS = 'SET_TODOS';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), text },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});
