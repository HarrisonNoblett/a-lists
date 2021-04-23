import React from "react";
import logo from "../../img/logocopy.png";
import LoginButton from "../../components/LoginButton";
import "./style.css";

const Landing = () => {
  return (
    <div>
      <style>
        {
          "body {background-image: url(https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80); background-repeat: no-repeat; background-size: cover; background-color:#000000; height: 45vh;}"
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
        <h1 style={{ color: "white", marginTop: "410px", textShadow:"2px 2px 5px grey" }}>
          Save it → Watch it
        </h1>
        <h2 style={{ color: "white", textShadow:"2px 2px 5px grey" }}>
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
