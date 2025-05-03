import React, {useEffect} from 'react';
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import {useSelector} from "react-redux";

const Page1 = () => {
    const todos = useSelector((state) => state.todos.tasks);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Page1;