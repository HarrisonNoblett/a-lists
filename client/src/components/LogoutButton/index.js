import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button className="btn btn-outline-light d-block mt-3 mr-3 mb-1" onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
        </button>
    );
}

export default LogoutButton;