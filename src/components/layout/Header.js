import React from 'react';

const Header = () => {
    return (
        <header className="col-12 bg-secondary p-4 text-white d-flex justify-content-between align-items-center">
            <h6 className="h4">
                Welcome <span className="font-weight-bold">Dave</span>
            </h6>
            <a className="text-white" href="#!">Logout</a>
        </header>
    );
};

export default Header;