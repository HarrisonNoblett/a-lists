import React from 'react';
import logo from '../img/logo.png';
import movie from '../img/movie.jpg';

const Landing = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <img src={movie} className="img-fluid" alt="Movie" style={{ height: '100%'}}></img>
                </div>
                <div className="col-md-5">
                    <img src={logo} className="img-fluid d-block" alt="Logo" ></img>
                    <h1 className="mb-3">Join A-Lists today.</h1>
                    <button type="button" className="btn btn-primary d-block mb-3">Sign up</button>
                    <button type="button" className="btn btn-primary d-block">Log in</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;