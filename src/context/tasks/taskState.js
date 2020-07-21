import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import taskReducer from './taskReducer';
import { GET_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SWITCH_TASK, CURRENT_TASK } from '../../types';
import ax from '../../config/axios';

const TaskState = (props) => {

    const initialState = {        
        tasksProyect: [],
        taskError: false,
        selectedTask: null
    }

    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    const getTasks = async id =>{        
        try {
            const response = await ax.get('/api/tasks', { params: {proyect: id} });            
            dispatch({
                type: GET_TASKS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addTask = async task =>{
        try {
            const response = await ax.post('/api/tasks', task);            
            dispatch({
                type: ADD_TASK,
                payload: response.data
            })
        } catch (error) {
            console.log(error.data);
        }
    }

    const validateTask = () =>{
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = async (id, proyect )=>{
        try {
            await ax.delete(`/api/tasks/${id}`, {params: { proyect }});
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const switchTask = async task =>{
        try {
            const response = await ax.put(`/api/tasks/${task._id}`, task);
            console.log(response);
            dispatch({
                type: SWITCH_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getCurrentTask = task =>{
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
            value={{                
                tasksProyect: state.tasksProyect,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask, 
                switchTask,
                getCurrentTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )    

}

export default TaskState;