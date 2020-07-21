import React, { useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import TaskContext from '../../context/tasks/taskContext';

const ElementProyect = ({proyect}) => {

    const proyectsContext = useContext(proyectContext);
    const { getProyect } = proyectsContext;

    const tasksContext = useContext(TaskContext);
    const { getTasks } = tasksContext

    const handleClick = id =>{
        getProyect(id);
        getTasks(id);
    }

    return (
        <li>
            <button 
                type="button"
                className="btn btn-transparent"
                onClick={()=> handleClick(proyect._id)}
            >
                {proyect.name}
            </button>
        </li>
    );
};

export default ElementProyect;