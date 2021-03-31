import react from "react"
import { Link } from "react-router-dom";
import Netflix from "../../img/Netflix.png"
import Hulu from "../../img/Hulu.png"
import Disney from "../../img/Disney.png"
import HBO from "../../img/HBO.png"
import Prime from "../../img/Prime.png"
import Apple from "../../img/Apple.png"

function Networks() {
    return (
        <div className="container-lg ">
                <div className="row">
                    <div className="row mt-5">
                        <div className="col-md-4 shadow-md">
                            <Link to="/netflix" rel="norferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Netflix} alt="Netflix" width="250" height="150" /></button></Link>
                        </div>
                        <div className="col-md-4 shadow-md">
                            <Link to="/Hulu" rel="norferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Hulu} alt="Hulu" width="250" height="150" /></button></Link>
                        </div>
                        <div className="col-md-4 shadow-md">
                            <Link to="/Disney" rel="norferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Disney} alt="Disney" width="250" height="150" /></button></Link>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 shadow-md">
                            <Link to="/HBO" rel="noreferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={HBO} alt="HBO-Max" width="250" height="150" /></button></Link>
                        </div>
                        <div className="col-md-4 shadow-md">
                            <Link to="/Prime" rel="noreferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Prime} alt="Amazon Prime Video" width="250" height="150" /></button></Link>
                        </div>
                        <div className="col-md-4 shadow-md">
                            <Link to="/Apple" rel="noreferrer"><button type="button" class="btn m-5 btn-lg rounded shadow-md"><img src={Apple} alt="Apple tv" width="250" height="150" /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Networks()