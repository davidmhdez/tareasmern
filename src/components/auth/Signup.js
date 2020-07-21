import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertsContext from '../../context/alerts/alertsContext';
import AuthContext from '../../context/auth/authContext';

const Signup = (props) => {

    const authContext = useContext(AuthContext);
    const { message, auth, signup } = authContext;

    const alertContexts = useContext(AlertsContext);
    const { alert, showAlert } = alertContexts;

    useEffect(()=>{

        if(auth){
            props.history.push('/proyects');
        }

        if(message){
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    },[message, auth, props.history])
    
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        repassword: ''
    });

    const { name, email, password, repassword } = user;

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || repassword.trim() === ''){
            showAlert('All fields are required', 'danger');
            return;
        }

        if(password.length < 6){
            showAlert('Password must be at least 6 characters', 'danger')
            return;
        }

        if(password !== repassword){
            showAlert('Passwords do not match', 'danger')
            return;
        }

        signup({
            name,
            email,
            password
        })
    }

    return (
        <div className="container-fluid bg-dark">
            <div className="row justify-content-center min-vh-100 align-items-center">
                <div className="col-6">
                    <div className="card">
                        {alert ? <div className={`alert alert-${alert.category}`}>{alert.msg}</div> : null }
                        <div className="card-body">
                            <h3 className="text-center font-weight-bold">Signup</h3>
                            <form
                                className="row mt-5"
                                onSubmit={handleSubmit}
                            >
                                <div className="col-3">                                    
                                    <label>Name:</label>                                    
                                </div>
                                <div className="col-9">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Enter your name"
                                            onChange={handleChange}
                                            value={name}
                                        />
                                    </div>
                                </div>
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
                                <div className="col-3">                                    
                                    <label>Confirm password:</label>                                    
                                </div>
                                <div className="col-9">
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="repassword"
                                            id="repassword"
                                            placeholder="Enter your password again"
                                            onChange={handleChange}
                                            value={repassword}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <input
                                        type="submit"
                                        className="btn btn-dark btn-block"
                                        value="Signup"
                                    />
                                </div>
                            </form>
                            <div className="mt-3 text-center">
                                <Link to="/" className="text-dark">
                                    Back to login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;