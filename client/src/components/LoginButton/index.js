import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props) => {

    const { loginWithRedirect } = useAuth0();

    return <button className={props.className} style={props.style} onClick={() => loginWithRedirect()}>{props.children}</button>
};

export default LoginButton;