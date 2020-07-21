import React, { useContext, useEffect } from 'react';
import ElementProyect from './ElementProyect';
import proyectContext from '../../context/proyects/proyectContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AlertsContext from '../../context/alerts/alertsContext';
import { toast, ToastContainer } from 'react-toastify';

const ProyectsList = () => {

    const proyectsContext = useContext(proyectContext)
    const { proyects, message, getProyects } = proyectsContext;

    const alertContext = useContext(AlertsContext);
    const { showAlert } = alertContext;

    useEffect(()=>{

        if(message){
            showAlert(message.msg, message.category);
            toast[`${message.category}`](`${message.msg}`);
        }

        getProyects();
        // eslint-disable-next-line
    }, [message])

    if(proyects.length === 0) return null;    

    return (
        <ul className="list-unstyled p-0">
            <ToastContainer/>
            <TransitionGroup>
                {proyects.map( proyect => (
                    <CSSTransition
                        key={proyect._id}
                        timeout={200}
                        classNames="task"
                    >
                        <ElementProyect                            
                            proyect={proyect}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ProyectsList;