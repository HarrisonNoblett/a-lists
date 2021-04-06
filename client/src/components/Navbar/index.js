import React from "react";
import logo from "../../img/logocopy.png";
import LogoutButton from "../LogoutButton";
import "./style.css"

function Navbar() {
    return (
        <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: "rgba(0,0,0,0.8"}}>
            <a className="navbar-brand" href="/dashboard">
                <img src={logo} alt="Logo" width="100" height="24"></img>
            </a>
            <LogoutButton />
        </nav>
    )
}
export default Navbar;