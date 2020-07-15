import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    
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
    }

    return (
        <div className="container-fluid bg-dark">
            <div className="row justify-content-center min-vh-100 align-items-center">
                <div className="col-6">
                    <div className="card">
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