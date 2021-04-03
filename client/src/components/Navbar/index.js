import React from "react";
import logo from "../../img/logocopy.png";
import LogoutButton from "../LogoutButton";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top rounded-bottom shadow-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/dashboard">
                    <img src={logo} alt="logo" width="100" height="24"></img>
                </a>
                <LogoutButton />
            </div> 
        </nav>
    )
}
export default Navbar();