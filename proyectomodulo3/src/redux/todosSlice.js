import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('todos')) || [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ ...action.payload, done: false });
    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.tasks.find(t => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    toggleDone: (state, action) => {
      const todo = state.tasks.find(t => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    }
  },
});

export const { addTodo, removeTodo, editTodo, toggleDone } = todosSlice.actions;
export default todosSlice.reducer;