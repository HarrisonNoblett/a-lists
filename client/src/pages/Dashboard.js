import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import API from "../utils/API";
import ExtAPI from "../utils/ExtAPI";


const Dashboard = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [film, setFilm] = useState("");
    const [info, setInfo] = useState({});
    const [poster, setPoster] = useState([])

    // Loads network and store them with setnetwork
    useEffect(() => {
        loadWatchlist();
    }, []);

    // Loads users saved list
    function loadWatchlist() {
        API.getWatchlist()
            .then(res =>
                setWatchlist(res.data))
            .catch(err => console.log(err));
    }

    // grabs the users search input
    function handleInputChange(event) {
        event.preventDefault();
        const filmInput = event.target.value;
        setFilm(filmInput);
    }

    // calls 3 apis to pull search 
    function handleSubmit(event) {
        event.preventDefault();
        ExtAPI.getTitles(film)
            .then(data => {
                console.log(data.data.title_results[0].id)
                ExtAPI.getInfo(data.data.title_results[0].id)
                    .then(data => {
                        setInfo({
                            title: data.data.title,
                            type: data.data.type,
                            plot: data.data.plot_overview,
                            rating: data.data.us_rating,
                            network: data.data.networks
                        });
                    })
                ExtAPI.getPoster(film)
                    .then(data =>
                        setPoster(data.data))
                    .catch(err => console.log(err));
            })
    }

    return (
        <div>
            {Navbar}
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-center">A-Lists</h1>
                    </div>
                    <form className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Movies and Shows to add to your Watch List" aria-describedby="button-addon2" onChange={handleInputChange} onSubmit={handleSubmit}></input><button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>

                <div className="resultsContainer">
                    <img src={poster.Poster} alt="film poster"></img>
                    <h3>{info.title}</h3>
                    <h4>{info.type}</h4>
                    <h5>{info.rating}</h5>
                    <p>{info.plot}</p>
                </div>

                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h2 className="lead">HBO Max WatchList</h2>
                        <hr />
                        {watchlist.length ? (
                            <div>
                                {watchlist.map(watchlist => (
                                    <button type="button" className="btn mr-1 btn-sm rounded shadow-lg topTen" key={watchlist._id}>
                                        <img className="topPosters" src={watchlist.poster_url} alt="poster"></img>
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

export default Dashboard;
