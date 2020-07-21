import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {

    const authContext = useContext(AuthContext);
    const { user, logout } = authContext;

    const handleLogout = () => logout();

    return (
        <header className="col-12 bg-secondary p-4 text-white d-flex justify-content-between align-items-center">
            {user ? 
                <h6 className="h4">
                    Welcome <span className="font-weight-bold">{user.name}</span>
                </h6>
                : null
            }
            <button 
                className="btn btn-transparent text-white"
                onClick={handleLogout}
            >
                Logout
            </button>            
        </header>
    );
};

export default Header;