import React from 'react';
import logo from '../img/logocopy.png';
import LoginButton from "../components/LoginButton";
import "./style.css";

const Landing = () => {
    return (
        <div>
            <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: "rgba(0,0,0,0.8" }}>
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="100"></img>
                </a>
                <LoginButton>Sign In</LoginButton>
            </nav>
            <div className="text-center">
                <h1 style={{ color: "white", marginTop: "410px" }}>All your streaming in one place.</h1>
                <h2 style={{ color: "white" }}>Get all your shows and movies under control with A-Lists</h2>
                <button className="btn btn-light btn-lg mt-3" style={{ fontWeight: "bold" }}>Get Started</button>
            </div>
        </div>
    );
}

export default Landing;