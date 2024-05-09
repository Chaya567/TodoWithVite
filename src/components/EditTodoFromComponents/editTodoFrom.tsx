import React, { useState } from 'react';
import { EditTodoFormProps } from '../../interfaces/EditTodoFormProps';

export const EditTodoForm = ({ editTodo, task }: EditTodoFormProps) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {   

        e.preventDefault();
        editTodo(value, task.id);
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                value={value}
                placeholder='Update Task'
                onChange={e => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    );
};
