import React from 'react';
import logo from '../img/logocopy.png';
import LoginButton from "../components/LoginButton";


const Landing = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="100" height="24"></img>
                </a>
                <LoginButton>Sign In</LoginButton>
        </nav>
    );
}

export default Landing;