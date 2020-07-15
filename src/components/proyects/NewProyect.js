import React, { Fragment, useState, useContext } from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const NewProyect = () => {

    const proyectsContext = useContext(proyectContext);
    const { form, showForm, addProyect, formError, validateForm } = proyectsContext;

    const [ proyect, setProyect ] = useState({
        name: ''
    });

    const handleChange = e =>{
        setProyect({
            ...proyect,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(proyect.name.trim() === '') {
            validateForm();
            return
        };

        addProyect(proyect);
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-dark"
                onClick={showForm}
            >
                New proyect
            </button>
            {form 
            ? 
            <form 
                className="mt-5" 
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Proyect name"
                    name="name"
                    onChange={handleChange}
                    value={proyect.name}
                />
                <input
                    type="submit"
                    className="btn btn-block btn-dark"
                    value="Add proyect"
                />
            </form>
        : null}
        {formError
            ? <div className="alert alert-danger mt-3">Proyect name is required</div>
            :  null
        }
        </Fragment>
    );
};

export default NewProyect;