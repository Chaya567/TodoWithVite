import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './Todo.module.css';


interface TodoProps {
    task: {
        id: string;
        task: string;
        completed: boolean;
    };
    toggleComplete: (taskId: string) => void;
    deleteTodo: (taskId: string) => void;
    editTodo: (taskId: string) => void;
}

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }: TodoProps) => {
    return (
        <div className={styles.Todo}>
<p onClick={() => toggleComplete(task.id)} className={task.completed ? styles.completed : ''}>{task.task}</p>
    <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
</div>
    );
};
