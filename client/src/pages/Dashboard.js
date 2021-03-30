import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"
import Netflix from "../img/Netflix.png"
import Hulu from "../img/Hulu.png"
import Disney from "../img/Disney.png"
import HBO from "../img/HBO.png"
import Prime from "../img/Prime.png"
import Apple from "../img/Apple.png"
// import login from "./Login"
// import signup from "./signup"
import "./style.css";

function Dashboard() {
    return (
        <div>
            <ul class="nav nav-tabs p-2 shadow-lg">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Signup">Signup</a>
                </li>
            </ul>
            <div className="d-flex flex-column float-right favorites" script={{ width: 300 }}>
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center rounded shadow-lg" >
                    <div className="container-fluid text-center">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="A-Lists" width="200" className="d-inline-block align-text-top" />
                        </a>
                        <hr />
                    </div>
                    <li className="nav-item" id="movieTitle">
                        <h3>Title:</h3>
                        <h5>Lord of The Rings</h5>
                        <hr />
                    </li>
                    <li className="nav-item">
                        <div className="rounded shadow-lg 300px">
                            <img id="movieImg" src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" width="250" height="300" />
                        </div>
                    </li>
                    <br />
                    <li className="nav-item">
                        <h4>Description</h4>
                        <hr />
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
                </ul>
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <Link to="/netflix" rel="norferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Netflix} alt="Netflix" width="250" height="150" /></button></Link>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Hulu} alt="Hulu" width="250" height="150" /></button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Disney} alt="Disney" width="250" height="150" /></button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <Link to="/hbomax" rel="noreferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={HBO} alt="HBO-Max" width="250" height="150" /></button></Link>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Prime} alt="Amazon Prime Video" width="250" height="150" /></button>
                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Apple} alt="Apple tv" width="250" height="150" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;