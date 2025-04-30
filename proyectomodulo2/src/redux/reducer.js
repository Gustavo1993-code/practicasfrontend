import { ADD_TODO, DELETE_TODO, SET_TODOS } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
