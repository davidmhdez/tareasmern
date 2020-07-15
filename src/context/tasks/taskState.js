import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import { GET_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const TaskState = (props) => {

    // const tasks = [
    //     {name: 'Design styles', state: true, proyectId: 1},
    //     {name: 'Develop system', state: true,proyectId: 1},
    //     {name: 'Document test cases', state: false,proyectId: 2},
    //     {name: 'Implement system', state: false, proyectId: 3}                
    // ]

    const initialState = {
        // tasks: []
        tasks: [
            {id: 1,name: 'Design styles', state: true, proyectId: 1},
            {id: 2, name: 'Develop system', state: true,proyectId: 1},
            {id: 3, name: 'Document test cases', state: false,proyectId: 2},
            {id: 4, name: 'Implement system', state: false, proyectId: 3}                
        ],
        tasksProyect: null,
        taskError: false
    }

    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    const getTasks = id =>{
        dispatch({
            type: GET_TASKS,
            payload: id
        })
    }

    const addTask = task =>{
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const validateTask = () =>{
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = id =>{
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProyect: state.tasksProyect,
                taskError: state.taskError,
                getTasks,
                addTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )    

}

export default TaskState;