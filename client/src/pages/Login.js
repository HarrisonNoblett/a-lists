import React from 'react';
import logo from '../img/logo.png';

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <img src={logo} className="img-fluid" alt="Logo"></img>
                    <h1 className="mb-3">Log in to A-Lists</h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <a href="/api/login" className="btn btn-primary d-block">Log in</a>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
}

export default Login;