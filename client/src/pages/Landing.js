import React from 'react';
import logo from '../img/logo.png';

const Landing = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    <img src={logo} class="img-fluid d-block" alt="Logo" ></img>
                    <button type="button" className="btn btn-primary d-block mb-3">Sign up</button>
                    <button type="button" className="btn btn-primary d-block">Log in</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;