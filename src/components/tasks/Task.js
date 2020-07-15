import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import proyectContext from '../../context/proyects/proyectContext';

const Task = ({task}) => {

    const tasksContext = useContext(TaskContext);
    const { deleteTask, getTasks } = tasksContext;

    const proyectsContext = useContext(proyectContext);
    const { proyect } = proyectsContext

    const handleDelete = () =>{
        deleteTask(task.id);
        getTasks(proyect[0].id);
    }

    return (
        <li className="d-flex justify-content-between align-items-center p-2 shadow rounded-lg mb-3 bg-white task">
            <p className="mb-0">{task.name}</p>            
            <div className="d-flex align-items-center">
            {task.state 
                ? <button type="button" className="badge badge-success badge-pill border-0 mr-2" >Done</button>
                : <button type="button" className="badge badge-danger badge-pill border-0 mr-2" >To do</button>}
                <button 
                    type="button"
                    className="btn btn-sm btn-dark mr-2"
                >
                    Update
                </button>
                <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Task;