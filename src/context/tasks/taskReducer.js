import { act } from "react-dom/test-utils";
import { GET_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK } from "../../types";


export default (state, action) =>{
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
                tasksProyect: state.tasks.filter(task => task.proyectId === action.payload )
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                taskError: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                taskError: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter( task => task.id !== action.payload )
            }
        default:
            return state;
    }
}