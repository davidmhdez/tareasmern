import { GET_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, SWITCH_TASK, CURRENT_TASK } from "../../types";


export default (state, action) =>{
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
                tasksProyect: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasksProyect: [...state.tasksProyect, action.payload],
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
                tasksProyect: state.tasksProyect.filter( task => task._id !== action.payload )
            }
        case SWITCH_TASK:
            return {
                ...state,
                tasksProyect: state.tasksProyect.map( task => task._id === action.payload._id ? action.payload : task )
            }
        case CURRENT_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        default:
            return state;
    }
}