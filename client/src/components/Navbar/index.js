import React from "react"
import LogoutButton from "../LogoutButton";

function Navbar() {
    return (
        <div>
            <ul class="nav nav-tabs p-2 shadow-lg">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page">Dashboard</a>
                </li>
                <li class="nav-item">
                    <LogoutButton />
                </li>
                <li class="nav-item">
                    
                </li>
            </ul>
        </div>
    )
}
export default Navbar()