import React, { Fragment, useContext } from 'react';
import Task from './Task';
import proyectContext from '../../context/proyects/proyectContext';
import TaskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TaskList = () => {

    const proyectsContext = useContext(proyectContext);
    const { proyect, deleteProyect } = proyectsContext;

    const tasksContext = useContext(TaskContext);
    const { tasksProyect } = tasksContext;
    const tasks = tasksProyect;

    if(proyect === null) return (<h5 className="text-center">Choose a proyect</h5>);

    const [ currentProyect ] = proyect;

    return (
        <Fragment>
            <h4 className="text-center font-weight-bold">Proyect: {currentProyect.name}</h4>
            <ul className="list-unstyled mt-5">
                {tasks.length === 0 
                    ? 
                    <TransitionGroup>
                        <CSSTransition                            
                            timeout={500}
                            classNames="task"
                        >
                            <li className="card p-2">
                                <p className="mb-0 text-center">There are not tasks</p>
                            </li> 
                        </CSSTransition>
                    </TransitionGroup>
                    
                    : 
                        <TransitionGroup>
                            {tasks.map( task => (
                                <CSSTransition
                                    key={task._id}
                                    timeout={500}
                                    classNames="task"
                                >
                                    <Task
                                        task={task}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup> 
                }
            </ul>
            <button
                type="button"
                className="btn btn-light"
                onClick={()=> deleteProyect(currentProyect._id)}
            >
                Delete proyect &times;
            </button>
        </Fragment>
    );
};

export default TaskList;