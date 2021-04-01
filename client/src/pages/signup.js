import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Input, FormBtn } from "../components/Form";

const Signup = () => {
    // Setting component's initial state
    const [formObject, setFormObject] = useState({})

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    // When the form is submitted, make API call to save the new user
    function handleFormSubmit() {
        if (formObject.name && formObject.email && formObject.password) {

        }
    };

    return (
        <div className="container">
            <div>
                <style>{'body { background-image: url(https://wallpaperaccess.com/full/2312674.jpg); }'}</style>
            </div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <img src={logo} className="img-fluid" alt="Logo"></img>
                    <h2 className="mb-3">Create your account</h2>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Name"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Email"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="password"
                            placeholder="Password"
                        />
                        <FormBtn
                            disabled={!(formObject.name && formObject.email && formObject.password)}
                            onClick={handleFormSubmit}
                        >
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