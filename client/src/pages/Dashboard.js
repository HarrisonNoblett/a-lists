import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import API from "../utils/API";
import ExtAPI from "../utils/ExtAPI";

const Dashboard = () => {
    const [watchlist, setWatchlist] = useState([]);
    const [film, setFilm] = useState("");
    const [info, setInfo] = useState({});
    const [poster, setPoster] = useState([]);
    // const [formObject, setFormObject] = useState({});

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

    function handleDelete(id) {
        API.deleteWatchlist(id)
            .then(data => loadWatchlist())
            .catch(err => console.log(err));
    }

    // network 1 = HBO;
    // network 8 = Disney;
    // network 1204, 2703, 2328 = Amazon;
    // network 822 = appletv;
    // network 431 = hulu;
    // network 248, 2554 = netflix
    // Updates state for saving to the database
    function handleFormSave(event) {
        console.log(event.target)
        event.preventDefault();
        console.log(info);
        console.log(poster)
        let network;
        let view_url;
        switch (info.network[0]) {
            case 1:
                network = "HBO";
                view_url = "https://www.hbomax.com/"
                break;
            case 8:
                network = "Disney";
                view_url = "https://www.disneyplus.com/home"
                break;
            case 1204:
            case 2703:
            case 2328:
                network = "Amazon";
                view_url = "https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011"
                break;
            case 822:
                network = "Apple TV";
                view_url = "https://www.apple.com/apple-tv-plus/"
                break;
            case 431:
                network = "Hulu";
                view_url = "https://www.hulu.com/welcome"
                break;
            case 248:
            case 2554:
                network = "Netflix";
                view_url = "https://www.netflix.com/"
                break;
            default:

        }
        API.saveWatchlist({
            title: info.title,
            poster_url: poster.Poster,
            network: network,
            view_url: view_url
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
                        <input type="text" className="form-control" placeholder="Enter Movies and Shows to add to your Watch List" aria-describedby="button-addon2" onChange={handleInputChange} onSubmit={handleSubmit}></input>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>

                <div className="resultsContainer">
                    <div className="apiPoster">
                        <img src={poster.Poster} alt="film poster"></img>
                    </div>
                    <h3>{info.title}</h3>
                    <h4>{info.type}</h4>
                    <h5>{info.rating}</h5>
                    <p>{info.plot}</p>
                    <div className="saveButton">
                        <button type="button" className="btn btn-dark" onClick={handleFormSave}>Save</button>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h2 className="lead">HBO Max WatchList</h2>
                        <hr />
                        {watchlist.length ? (
                            <div>
                                {watchlist.map(watchlist => (
                                    <button type="button" className="btn mr-1 btn-sm rounded shadow-lg topTen" key={watchlist._id}>
                                        <img className="topPosters" src={watchlist.poster_url} alt="poster"></img><span className="delBtn" onClick={handleDelete}>x</span>
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
}

export default Dashboard;
