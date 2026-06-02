import React, { useState, useEffect } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
    };

    const addTask = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
        setTitle('');
    };

    const updateTask = async (id, updatedTask) => {
        const response = await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });
        const data = await response.json();
        setTasks(tasks.map(task => (task.id === id ? data : task)));
    };

    const deleteTask = async (id) => {
        await fetch(`/api/tasks/${id}`, {
            method: 'DELETE'
        });
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>** To-Do List**</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New task"
                    required
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="text"
                            value={task.title}
                            onChange={(e) => updateTask(task.id, { ...task, title: e.target.value })}
                        />
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={(e) => updateTask(task.id, { ...task, completed: e.target.checked })}
                        />
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
