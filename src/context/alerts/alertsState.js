import React, { useReducer } from 'react';
import alertReducer from './alertsReducer';
import AlertsContext from './alertsContext';
import { SHOW_ALERT, HIDE_ALERT } from '../../types';

const AlertState = (props) => {

    const initialState = {
        alert: null
    }

    const [ state, dispatch ] = useReducer(alertReducer, initialState);

    const showAlert = (msg, category) =>{
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        })

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 5000);
    }

    

    return(
        <AlertsContext.Provider
            value={{
                alert: state.alert,
                showAlert                
            }}
        >
            {props.children}
        </AlertsContext.Provider>
    )

}

export default AlertState;