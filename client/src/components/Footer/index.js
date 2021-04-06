import React from "react";
import "./style.css";
import logo from "../../img/logocopy.png";

function Footer() {
    return (
        <footer>
            <div className="wrapper mx-auto">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={logo} alt="logo"></img><br />
                        <p>&copy; 2021 All Rights Reserved.</p>
                    </div>
                    <div className="col-sm-3">
                        <h3>A-LISTS TEAM</h3>
                        <a href="https://github.com/chavalk">Jose Garcia</a><br />
                        <a href="https://github.com/ggfalloon">Gabriele Falloon</a><br />
                        <a href="https://github.com/HarrisonNoblett">Harrison Noblett</a><br />
                        <a href="https://github.com/jannverduzco">Janneth A. Verduzco</a><br />
                    </div>
                    <div className="col-sm-4">
                        <h3>RESOURCES</h3>
                        <p></p>

                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer;