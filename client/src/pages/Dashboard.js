import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Watchlist from "../components/Watchlist";
import API from "../utils/API";
import ExtAPI from "../utils/ExtAPI";
import logo from "../img/logocopy.png";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
    // Setting initial state
    const [watchlist, setWatchlist] = useState([]);
    const [film, setFilm] = useState("");
    const [info, setInfo] = useState({});
    const [poster, setPoster] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Set useAuth0 hook
    const { user, isLoading } = useAuth0();

    // Loads network and store them with setnetwork
    useEffect(() => {
        loadWatchlist();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Loads users saved list
    function loadWatchlist() {
        API.getWatchlist(user.email)
            .then((res) => setWatchlist(res.data))
            .catch((err) => console.log(err));
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

        ExtAPI.getTitles(film).then((data) => {
            console.log(data.data.title_results[0].id);
            ExtAPI.getInfo(data.data.title_results[0].id).then((data) => {
                setInfo({
                    title: data.data.title,
                    type: data.data.type,
                    plot: data.data.plot_overview,
                    rating: data.data.us_rating,
                    networks: data.data.networks,
                });
            });
            ExtAPI.getPoster(film)
                .then((data) => setPoster(data.data))
                .catch((err) => console.log(err));
        });
        showHide();
    }

    function handleDelete(id) {
        API.deleteWatchlist(id)
            .then((data) => loadWatchlist())
            .catch((err) => console.log(err));
    }

    // Updates state for saving to the database
    function handleFormSave(event) {
        event.preventDefault();
        console.log(info);
        let network;
        let view_url;
        if (!info.networks) {
            network = "Other Networks";
            view_url = "/dashboard";
            alert("Unknown Network, Listed in 'Other Networks' Section");
        } else {
            switch (info.networks[0]) {
                case 1:
                    network = "HBO";
                    view_url = "https://www.hbomax.com/";
                    break;
                case 8:
                    network = "Disney";
                    view_url = "https://www.disneyplus.com/home";
                    break;
                case 1204:
                case 2703:
                case 2328:
                    network = "Amazon";
                    view_url =
                        "https://www.amazon.com/Amazon-Video/b?ie=UTF8&node=2858778011";
                    break;
                case 822:
                    network = "Apple TV";
                    view_url = "https://www.apple.com/apple-tv-plus/";
                    break;
                case 431:
                    network = "Hulu";
                    view_url = "https://www.hulu.com/welcome";
                    break;
                case 248:
                case 2554:
                    network = "Netflix";
                    view_url = "https://www.netflix.com/";
                    break;
                default:
                    network = "Other Networks";
                    view_url = "/dashboard";
                    alert("Unknown Network, Listed in 'Other Networks' Section");
            }
            API.saveWatchlist({
                title: info.title,
                poster_url: poster.Poster,
                network: network,
                view_url: view_url,
                email: user.email,
            }).then((res) => loadWatchlist());
        }
    }

    function showHide() {
        setShowResults({
            showResults: true
        })
    }

    return (
        <div>
            <Navbar />
            <style>
                {
                    "body { background-image: url(https://www.xmple.com/wallpaper/gradient-black-grey-linear-1920x1080-c2-000000-a9a9a9-a-150-f-14.svg); }"
                }
            </style>
            <div className="container">
                <div id="imgContainer">
                    <img src={logo} alt="logo" className="dashLogo"></img>
                </div>
                <div className="jumbotron" id="searchArea">
                    <form className="input-group mb-3 shadow-lg">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add a Title to Your Watchlist"
                            aria-describedby="button-addon2"
                            onChange={handleInputChange}
                            onSubmit={handleSubmit}
                        ></input>
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                            id="button-addon2"
                            onClick={handleSubmit}
                        >Search</button>
                    </form>
                </div>
                {showResults ?
                    <div className="row resultsContainer text-white text-center">
                        <div className="apiPoster col-md-6">
                            <img src={poster.Poster} alt="film poster" id="posterResult"></img>
                        </div>
                        <div className="col-md-6" id="resultsCol">
                            <h3>{info.title}</h3>
                            <h5>Film Type: {info.type}</h5>
                            <h5>Rating: {info.rating}</h5>
                            <p>{info.plot}</p>
                            <div className="saveButton">
                                <button
                                    type="button"
                                    className="btn btn-light save"
                                    onClick={handleFormSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                    : null
                }

                <Watchlist
                  network="HBO Max"
                  watchlist={watchlist.filter(watchlist => watchlist.network === "HBO")}
                  handleDelete={handleDelete}
                />

                <Watchlist
                  network="Disney Plus"
                  watchlist={watchlist.filter(watchlist => watchlist.network === "Disney")}
                  handleDelete={handleDelete}
                />
                
                <Watchlist
                  network="Prime Video"
                  watchlist={watchlist.filter(watchlist => watchlist.network === "Amazon")}
                  handleDelete={handleDelete}
                />

                <Watchlist
                  network="Apple TV Plus"
                  watchlist={watchlist.filter(watchlist => watchlist.network === "Apple TV")}
                  handleDelete={handleDelete}
                />

                <Watchlist
                  network="Hulu"
                  watchlist={watchlist.filter(watchlist => watchlist.network === "Hulu")}
                  handleDelete={handleDelete}
                />

                <Watchlist
                  network="Netflix"
                  watchlist={watchlist.filter(watchlist => watchlist.network === "Netflix")}
                  handleDelete={handleDelete}
                />

                <Footer />
            </div>
        </div>
    );
};

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <div>Loading...</div>,
});