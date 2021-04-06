import React from "react";
import logo from "../../img/logocopy.png";
import LogoutButton from "../LogoutButton";
import "./style.css"

function Navbar() {
    return (

        <nav className="navbar navbar-dark bg-dark">

            <a className="navbar-brand" href="/dashboard">
                <img src={logo} alt="logo" width="100" height="24"></img>
            </a>
            <LogoutButton />
        </nav>

    )
}
export default Navbar();