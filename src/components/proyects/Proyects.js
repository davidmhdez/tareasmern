import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';
import AuthContext from '../../context/auth/authContext';

function Proyects() {

    const authContext = useContext(AuthContext);
    const { authUser } = authContext;

    useEffect(()=>{
        authUser();
        // eslint-disable-next-line
    },[])

    return (
        <div className="container-fluid">
            <div className="row bg-gray min-vh-100">
                <Sidebar/>
                <div className="col-8">
                    <div className="row">
                        <Header/>
                        <main className="col-12 p-0">
                            <TaskForm/>
                            <div className="p-4">
                                <TaskList/>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyects;