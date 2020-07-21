import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';
import AlertsContext from '../../context/alerts/alertsContext';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {

    const authContext = useContext(AuthContext);
    const { auth, message, login } = authContext;

    const alertContexts = useContext(AlertsContext);
    const { alert, showAlert } = alertContexts;

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            showAlert('All fields are required', 'danger');
            return;
        }

        login(user);
    }

    useEffect(()=>{

        if(auth){
            props.history.push('/proyects');
        }

        if(message){
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    },[message])

    return (
        <div className="container-fluid bg-dark">            
            <div className="row justify-content-center min-vh-100 align-items-center">
                <div className="col-6">
                    <div className="card">
                        {alert ? <div className={`alert alert-${alert.category}`}>{alert.msg}</div> : null }
                        <div className="card-body">
                            <h3 className="text-center font-weight-bold">Login</h3>
                            <form
                                className="row mt-5"
                                onSubmit={handleSubmit}
                            >
                                <div className="col-3">                                    
                                    <label>Email:</label>                                    
                                </div>
                                <div className="col-9">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            onChange={handleChange}
                                            value={email}
                                        />
                                    </div>
                                </div>
                                <div className="col-3">                                    
                                    <label>Password:</label>                                    
                                </div>
                                <div className="col-9">
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            onChange={handleChange}
                                            value={password}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <input
                                        type="submit"
                                        className="btn btn-dark btn-block"
                                        value="Login"
                                    />
                                </div>
                            </form>
                            <div className="mt-3 text-center">
                                <Link to="/signup" className="text-dark">
                                    Get a new account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;