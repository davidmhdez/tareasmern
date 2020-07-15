import React, { useReducer } from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import { PROYECT_FORM, GET_PROYECTS, ADD_PROYECTS, VALIDATE_FORM, CURRENT_PROYECT, DELETE_PROYECT } from '../../types';
import { v4 as uuidv4} from 'uuid';

const ProyectState = props =>{
    
    const proyects = [
        {id: 1, name: 'Social service system'},
        {id: 2, name: 'Landing page'},
        {id: 3, name: 'Precharge system'}
    ];
    
    const initialState = {
        form: false,
        proyects: [],
        formError: false,
        proyect: null
    }

    const [ state, dispatch ] = useReducer(proyectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: PROYECT_FORM
        })
    }

    const getProyects = () =>{
        dispatch({
            type: GET_PROYECTS,
            payload: proyects
        })
    }

    const addProyect = proyect =>{
        proyect.id = uuidv4();
        dispatch({
            type: ADD_PROYECTS,
            payload: proyect
        })
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

    const deleteProyect = id =>{
        dispatch({
            type: DELETE_PROYECT,
            payload: id
        })
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