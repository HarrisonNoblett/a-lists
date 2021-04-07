import React from "react";
import "./style.css";
import logo from "../../img/logocopy.png";
import terms from "../../img/termsofuse.pdf";

function Footer() {
    return (
        <footer>
            <div className="wrapper mx-auto">
                <div className="row">
                    <div className="col-sm-6 p-2">
                        <img src={logo} alt="logo" id="footerLogo"></img><br />

                        <p>&copy; 2021 All Rights Reserved.</p>
                    </div>
                    <div className="col-sm-3 p-2">
                        <h5>A-LISTS TEAM</h5>
                        <a href="https://github.com/chavalk" target="blank" className="teamLink">Jose Garcia</a><br />
                        <a href="https://github.com/ggfalloon" target="blank" className="teamLink">Gabriele Falloon</a><br />
                        <a href="https://github.com/HarrisonNoblett" target="blank" className="teamLink">Harrison Noblett</a><br />
                        <a href="https://github.com/jannverduzco" target="blank" className="teamLink">Janneth A. Verduzco</a><br />
                    </div>
                    <div className="col-sm-3 p-2">
                        <h5>RESOURCES</h5>
                        <a href={terms} target="blank" className="teamLink">Terms of Use</a><br />
                        <a href="https://api.watchmode.com/" target="blank" className="teamLink">Watchmode API</a><br />
                        <a href="https://www.omdbapi.com/" target="blank" className="teamLink">OMDB API</a><br />
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer;