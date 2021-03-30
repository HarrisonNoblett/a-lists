import React from "react";
import { Link } from "react-router";
import logo from "../img/logo.png"
import Netflix from "../img/Netflix.png"
import Hulu from "../img/Hulu.png"
import Disney from "../img/Disney.png"
import HBO from "../img/HBO.png"
import Prime from "../img/Prime.png"
import Apple from "../img/Apple.png"
import "./style.css";

function Dashboard() {
    return (
        <div>
            <div className="d-flex flex-column float-left text-white bg-dark rounded shadow-xl">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <div className="container-fluid text-center">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="A-Lists" width="200" className="d-inline-block align-text-top" />
                        </a>
                    </div>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link active py-3 border-bottom" title data-bs-toggle="tooltip" aria-current="page" data-bs-placement="right" href="#">Dahsboard</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="#">Signup</a>
                    </li>
                    <hr />
                </ul>
            </div>
            <div className="d-flex flex-column float-right text-white bg-dark rounded shadow-xl" width="500">
                <ul className="nav nav-pills nav-flush flex-column m-3 text-center">
                    <div className="container-fluid text-center">
                        Favorites
                    </div>
                    <hr />
                    <li className="service" id="service-item">
                        <h5 class="card-title fw-bold text-white">Netflix</h5>
                    </li>
                    <hr />
                    <li className="info shadow-lg m-3 p-3">
                        <img src="https://gortoncenter.org/wp-content/uploads/2018/03/LordOfTheRings.jpg" width="350" height="200" alt="Movie Image" />
                        <br />
                        <p className="fw-bold">The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.</p>
                    </li>
                    <hr />
                    <div className="text-primary">
                        A-lists
                    </div>
                    <hr />
                </ul>
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/hbomax" rel="norferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Netflix} alt="Netflix" width="250" height="150" /></button></Link>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Hulu} alt="Hulu" width="250" height="150" /></button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Disney} alt="Disney" width="250" height="150" /></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={HBO} alt="HBO-Max" width="250" height="150" /></button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Prime} alt="Amazon Prime Video" width="250" height="150" /></button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Apple} alt="Apple tv" width="250" height="150" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;