import React, { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, setTodos } from './redux/actions';
import { Layout, Typography } from 'antd';
import AddTodo from './components/AddTodo';

const { Header, Content } = Layout;
const { Title } = Typography;
const TodoList = lazy(() => import('./components/TodoList'));

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    dispatch(setTodos(storedTodos));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Title style={{ color: 'white', margin: '10px 0' }} level={2}>To-Do List</Title>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <AddTodo onAddTodo={handleAddTodo} />
        <Suspense fallback={<div>Cargando tareas...</div>}>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </Suspense>
      </Content>
    </Layout>
  );
};

export default App;
