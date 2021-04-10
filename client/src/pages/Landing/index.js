import React from "react";
import logo from "../../img/logocopy.png";
import LoginButton from "../../components/LoginButton";
import "./style.css";

const Landing = () => {
  return (
    <div>
      <style>
        {
          "body {background-image: url(https://www.josesgarcia.com/images/adobe.jpeg); background-repeat: no-repeat; background-size: cover; background-color:#000000; height: 45vh;}"
        }
      </style>
      <nav
        className="navbar navbar-dark fixed-top"
        style={{ backgroundColor: "rgba(0,0,0,0.8" }}
      >
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="100"></img>
        </a>
        <LoginButton className="btn btn-outline-light d-block mt-3 mr-3 mb-1">Sign In</LoginButton>
      </nav>
      <div className="text-center">
        <h1 style={{ color: "white", marginTop: "410px" }}>
          Save it → Watch it
        </h1>
        <h2 style={{ color: "white" }}>
          Get all your shows and movies under control with A-Lists
        </h2>
        <LoginButton className="btn btn-light btn-lg mt-3" style={{ fontWeight: "bold" }}>Get Started</LoginButton>
      </div>
      <footer className="landingFooter text-center">
        <div className="pt-3">
            <img src={logo} alt="logo" id="footerLogo"></img><br />
            <p>&copy; 2021 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
