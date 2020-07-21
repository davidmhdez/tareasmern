import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { SIGNUP_ERROR, SIGNUP_SUCCESS, LOGIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGOUT } from '../../types';
import ax from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null,
        loading: true
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const signup = async data =>{
        try {
            const response = await ax.post('/api/users', data);
            console.log(response);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data
            })

            authUser();

        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'danger'
            }
            dispatch({
                type: SIGNUP_ERROR,
                payload: alert
            })
        }
    }

    const authUser = async () =>{
        const token = localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        }

        try {
            const response = await ax.get('/api/auth');            
            dispatch({
                type: GET_USER,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const login = async data => {
        try {
            const response = await ax.post('/api/auth', data);
            dispatch({
               type: LOGIN_SUCCESS,
               payload: response.data 
            })

            authUser();
        } catch (error) {            
            const alert = {
                msg: error.response.data.msg,
                category: 'danger'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    const logout = () =>{
        dispatch({
            type: LOGOUT
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                loading: state.loading,
                signup,
                authUser, 
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;