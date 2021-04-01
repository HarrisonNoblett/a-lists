import React from "react";
import Navbar from "../components/Navbar"
import WatchList from "../components/WatchList"
import Networks from "../components/Networks"
import "./style.css";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function Dashboard() {
    return (
        
        <div>
            <div>
                {Navbar}
                {WatchList}
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">{Networks}</div>
                </div>
            </div>
        </div>
    );
}

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <div>Loading...</div>
});