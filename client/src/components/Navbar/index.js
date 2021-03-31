import React from "react"
import login from "../../pages/Login"
import signup from "../../pages/Signup"

function Navbar() {
    return (
        <div>
            <ul class="nav nav-tabs p-2 shadow-lg">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={login}>Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={signup}>Signup</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar()