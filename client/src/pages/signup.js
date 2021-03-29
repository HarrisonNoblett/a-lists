import React from 'react';
import logo from '../img/logo.png';

const Signup = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <img src={logo} className="img-fluid" alt="Logo"></img>
                    <h2 className="mb-3">Create your account</h2>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <a href="/login" className="btn btn-primary d-block">Sign up</a>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
}

export default Signup;