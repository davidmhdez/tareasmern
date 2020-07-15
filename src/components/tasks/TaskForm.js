import React, { useContext, useState } from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import TaskContext from '../../context/tasks/taskContext';

const TaskForm = () => {

    const proyectsContext = useContext(proyectContext);
    const { proyect } = proyectsContext;
    const tasksContext = useContext(TaskContext);
    const { addTask, taskError, validateTask, getTasks } = tasksContext;

    const [ task, setTask ] = useState({
        name: ''
    })

    const handleChange = e =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        
        if(task.name.trim() === ''){
            validateTask();
            return;
        }
        
        task.proyectId = proyect[0].id;
        task.state= false;
        addTask(task);
        getTasks(proyect[0].id);
        setTask({
            name: ''
        })
    }

    if(proyect === null) return null;

    return (
        <div className="bg-dark p-4">
            <form
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Task name"
                        name="name"
                        onChange={handleChange}
                        value={task.name}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-block btn-secondary" 
                        value="Add task"
                    />
                </div>
            </form>
            {taskError 
                ? <div className="alert alert-danger">Name is required</div> 
                : null
            }
        </div>
    );
};

export default TaskForm;