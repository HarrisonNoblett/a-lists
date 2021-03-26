import react from "react";
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
            <nav class="navbar navbar-dark bg-transparent">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img src={logo} alt="A-Lists" width="150" class="d-inline-block align-text-top"/>
                    </a>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Netflix} alt="Netflix" width="250" height="150"/></button>
                    </div>
                    <div className="col-md-4">
                        <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Hulu} alt="Hulu" width="250" height="150"/></button>
                    </div>
                    <div className="col-md-4">
                        <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Disney} alt="Disney" width="250" height="150"/></button>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={HBO} alt="HBO-Max" width="250" height="150"/></button>
                    </div>
                    <div className="col-md-4">
                        <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Prime} alt="Amazon Prime Video" width="250" height="150"/></button>
                    </div>
                    <div className="col-md-4">
                        <button type="button" class="btn m-5 btn-lg rounded shadow-lg"><img src={Apple} alt="Apple tv" width="250" height="150"/></button>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div class="card text-center bg-dark text-white m-5">
                        <div class="card-header">
                            Favorites
                        </div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold text-primary">Streaming Service</h5>
                                <div className="row m-2">
                                    <div className="col-md-6">
                                        <img src="https://gortoncenter.org/wp-content/uploads/2018/03/LordOfTheRings.jpg" width="350" height="200" alt="Movie Image"/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <p className="fw-bold">The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.</p>
                                    </div>
                                </div>
                            </div>
                        <div class="card-footer text-muted">
                            A-Lists
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard;