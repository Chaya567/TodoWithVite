import React, { useState } from 'react';
import { TodoForm } from '../TodoFromComponents/TodoFrom';
import { Todo } from '../TodoComponents/Todo';
import { EditTodoForm } from '../EditTodoFromComponents/editTodoFrom';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoWrapper.module.css';


interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

const TodoWrapper = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };
    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const editTodo = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };
    const editTask = (task: string, id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }
    
    return (
        <div className={styles.TodoWrapper}>
            <h1>To Do List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id}/> 
                ) : (
                    <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}
        </div>
    );
};
export default TodoWrapper;
