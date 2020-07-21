import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGOUT } from "../../types";


export default (state, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                auth: true,
                message: null,
                loading: false
            }
        case LOGOUT:
        case LOGIN_ERROR:
        case SIGNUP_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                auth: null,
                message: action.payload,
                loading: false
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                auth: true,
                loading: false
            }
        default:
            return state;
    }
}