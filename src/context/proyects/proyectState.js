import React, { useReducer } from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import { PROYECT_FORM, GET_PROYECTS, ADD_PROYECTS, VALIDATE_FORM, CURRENT_PROYECT, DELETE_PROYECT } from '../../types';
import ax from '../../config/axios';

const ProyectState = props =>{        
    
    const initialState = {
        form: false,
        proyects: [],
        formError: false,
        proyect: null,
        message: null
    }

    const [ state, dispatch ] = useReducer(proyectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: PROYECT_FORM
        })
    }

    const getProyects = async () =>{
        try {
            const response = await ax.get('/api/proyects');            
            dispatch({
                type: GET_PROYECTS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addProyect = async proyect =>{
        try {

            const response = await ax.post('/api/proyects',proyect);
            console.log(response);
            dispatch({
                type: ADD_PROYECTS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const validateForm = () =>{
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const getProyect = id =>{
        dispatch({
            type: CURRENT_PROYECT,
            payload: id
        })
    }

    const deleteProyect = async id =>{
        try {
            await ax.delete(`/api/proyects/${id}`);            
            dispatch({
                type: DELETE_PROYECT,
                payload: id
            })
        } catch (error) {            
            // const alert = {
            //     msg: 'there are an error',
            //     category: 'error'
            // }
            // dispatch({
            //     type: ERROR_PROYECT
            // })
            console.log(error);
        }
    }

    return (
        <proyectContext.Provider
            value={{
                form: state.form,
                proyects: state.proyects,
                formError: state.formError,
                proyect: state.proyect,
                showForm,
                getProyects,
                addProyect,
                validateForm,
                getProyect,
                deleteProyect               
            }}
        >
            {props.children}
        </proyectContext.Provider>
    )
}

export default ProyectState;