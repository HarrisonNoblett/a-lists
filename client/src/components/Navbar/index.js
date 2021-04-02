import React from "react";
import logo from "../../img/logocopy.png";
import LogoutButton from "../LogoutButton";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/dashboard">
                        <img src={logo} alt="logo" width="30" height="24"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <li classNameName="nav-item">
                                    <LogoutButton />
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Navbar();