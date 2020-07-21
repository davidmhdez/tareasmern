import { PROYECT_FORM,GET_PROYECTS, ADD_PROYECTS, VALIDATE_FORM, CURRENT_PROYECT, DELETE_PROYECT, ERROR_PROYECT } from "../../types"


export default (state, action) => {
    switch(action.type){
        case PROYECT_FORM:
            return {
                ...state,
                form: true
            }
        case GET_PROYECTS:
            return {
                ...state,
                proyects: action.payload
            }
        case ADD_PROYECTS:
            return {
                ...state,
                proyects: [...state.proyects, action.payload],
                form: false,
                formError: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                formError: true
            }
        case CURRENT_PROYECT:
            return {
                ...state,
                proyect: state.proyects.filter( proyect => proyect._id === action.payload)
            }
        case DELETE_PROYECT:
            return {
                ...state,
                proyects: state.proyects.filter( proyect => proyect._id !== action.payload),
                proyect: null
            }
        case ERROR_PROYECT:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}