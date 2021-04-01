import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
};

const providerConfig = {
    domain: "a-lists.us.auth0.com",
    clientId: "Fh6gxt8ZVoGSYdBTzbLwMbc2NgsnNZPd",
    redirectUri: "http://localhost:3000/dashboard"
};

ReactDOM.render(
    <Auth0Provider {...providerConfig}>
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);
