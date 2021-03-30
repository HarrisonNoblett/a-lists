import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Input, FormBtn } from "../components/Form";

const Signup = () => {
    // Setting component's initial state
    const [formObject, setFormObject] = useState({})
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <img src={logo} className="img-fluid" alt="Logo"></img>
                    <h2 className="mb-3">Create your account</h2>
                    <form>
                        <Input
                            name="name"
                            placeholder="Name"
                        />
                        <Input
                            name="email"
                            placeholder="Email"
                        />
                        <Input
                            name="password"
                            placeholder="Password"
                        />
                        <FormBtn>
                            Sign up
                        </FormBtn>
                    </form>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
}

export default Signup;