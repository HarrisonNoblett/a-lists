import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import Navbar from "../components/Navbar"
import API from "../utils/API";

const Dashboard = () => {

    const [film, setFilm] = useState("");
    const [info, setInfo] = useState({});
    const [network, setNetwork] = useState([]);


    // Loads network and store them with setnetwork
    useEffect(() => {
        loadNetwork();
    }, []);

    function loadNetwork() {
        API.getNetwork("HBOMax")
            .then(res =>
                setNetwork(res.data))
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        event.preventDefault();
        const filmInput = event.target.value;
        setFilm(filmInput);
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.getFilms(film)
            .then(data => {
                console.log(data.data.title)
                setInfo({
                    title: data.data.title,
                    type: data.data.type,
                    plot: data.data.plot_overview,
                    rating: data.data.us_rating,
                    network: data.data.networks
                });
            })
    }

    return (
        <div>
            <div>
                {/* <Navbar /> */}
            </div>
            <div className="container">
                <div>
                    <style>{'body { background-image: url(https://wallpaperaccess.com/full/2312674.jpg); }'}</style>
                </div>
                <div className="jumbotron jumbotron-fluid">
                        <LogoutButton />
                        <br />
                    <div className="container">
                        <h1 className="display-4 text-center">A-Lists</h1>
                    </div>
                    <form className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Enter Movies and Shows to add to your Watch List" aria-describedby="button-addon2" onChange={handleInputChange} onSubmit={handleSubmit}></input><button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>

                <div className="resultsContainer">
                    <h2>{info.network}</h2>
                    <h3>{info.title}</h3>
                    <h4>{info.type}</h4>
                    <h5>{info.rating}</h5>
                    <p>{info.plot}</p>
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h2>Watch List</h2>
                        <hr />
                        <p className="lead">HBO Max Show List</p>
                        {network.length ? (
                            <div>
                                {network.map(network => (
                                    <button type="button" className="btn mr-1 btn-sm rounded shadow-lg topTen" key={network._id}>
                                        <img className="topPosters" src={network.poster_url} alt="poster"></img>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <div>Loading...</div>
});