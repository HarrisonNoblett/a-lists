import React from 'react';
import logo from '../img/logocopy.png';
import movie from '../img/movie.jpg';
import LoginButton from "../components/LoginButton";


const Landing = () => {
    return (
        <div className="container">
            <div>
                <style>{'body { background-image: url(https://wallpaperaccess.com/full/2312674.jpg); }'}</style>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={movie} className="img-fluid" alt="Movie" style={{ height: '100%' }}></img>
                </div>
                <div className="col-md-5">
                    <img src={logo} className="img-fluid d-block" alt="Logo" ></img>
                    <h1 className="mb-3">Join A-Lists today.</h1>
                    <LoginButton>Sign up</LoginButton>
                    <LoginButton>Log in</LoginButton>
                </div>
            </div>
        </div>
    );
}

export default Landing;