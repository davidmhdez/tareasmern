import React from 'react';
import NewProyect from '../proyects/NewProyect';
import ProyectsList from '../proyects/ProyectsList';

const Sidebar = () => {    

    return (
        <aside className="col-4 shadow p-4 bg-white">
            <h3 className="font-weight-bold text-center mb-5">
                MERN<span className="font-weight-light">Tasks</span>
            </h3>
            <NewProyect/>
            <div className="mt-5">
                <h5 className="font-weight-bold text-center">Your Proyects</h5>
                <ProyectsList/>
            </div>
        </aside>
    );
};

export default Sidebar;