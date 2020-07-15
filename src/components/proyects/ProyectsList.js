import React, { useContext, useEffect } from 'react';
import ElementProyect from './ElementProyect';
import proyectContext from '../../context/proyects/proyectContext';

const ProyectsList = () => {

    const proyectsContext = useContext(proyectContext)

    const { proyects, getProyects } = proyectsContext;

    useEffect(()=>{
        getProyects()
    }, [])

    if(proyects.length === 0) return null;    

    return (
        <ul className="list-unstyled p-0">
            {proyects.map( proyect => (
                <ElementProyect
                    key={proyect.id}
                    proyect={proyect}
                />
            ))}
        </ul>
    );
};

export default ProyectsList;