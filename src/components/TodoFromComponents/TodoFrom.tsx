import React, { useState } from 'react';
import styles from './TodoFrom.module.css';


interface TodoFormProps {
    addTodo: (task: string) => void;
}

export const TodoForm: React.FC<{ addTodo: (value: string) => void }> = ({ addTodo }) => {

    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    };

    return (
        <form className={styles.TodoForm} onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles['todoInput']}
                value={value}
                placeholder='What is the task today?'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className={styles['todoBtn']}>Add Task</button>
        </form>
    );
};
