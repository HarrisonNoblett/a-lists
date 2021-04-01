import React, { useState, useEffect } from "react";
import API from "../utils/API";

const HBOMax = () => {
    const [film, setFilm] = useState("");
    const [info, setInfo] = useState({});
    const [network, setNetwork] = useState({});

    // Loads network and store them with setnetwork
    useEffect(() => {
        loadNetwork();
    }, []);

    function loadNetwork() {
        API.getNetwork()
            .then(res => setNetwork(res.data)
            )
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
                <style>{'body { background-image: url(https://wallpaperaccess.com/full/2312674.jpg); }'}</style>
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">HBO Max</h1>
                </div>
                <form>
                    <input className="form-control" placeholder="Enter Movies and Shows to add to your Watch List" onChange={handleInputChange} onSubmit={handleSubmit}></input><button onClick={handleSubmit}>Submit</button>
                </form>
            </div>

            <div className="resultsContainer">
                <h3>{info.title}</h3>
                <h4>{info.type}</h4>
                <h5>{info.rating}</h5>
                <p>{info.plot}</p>
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container m-0">
                    <p className="lead">Top HBO Max Movies & Shows</p>
                    {network.length ? (
                        <ul>
                            {network.map(network => (
                                <li key={network._id}>
                                    <img src={network.poster_url} alt="poster"></img>

                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                    <button type="button" className="btn mr-1 btn-sm rounded shadow-lg">
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button type="button" className="btn mr-1 btn-sm rounded shadow-lg">
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button type="button" className="btn mr-1 btn-sm rounded shadow-lg">
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button type="button" className="btn mr-1 btn-sm rounded shadow-lg">
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button
                        type="button"
                        className="btn mr-1 mt-1 btn-sm rounded shadow-lg"
                    >
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button
                        type="button"
                        className="btn mr-1 mt-1 btn-sm rounded shadow-lg"
                    >
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button
                        type="button"
                        className="btn mr-1 mt-1 btn-sm rounded shadow-lg"
                    >
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button
                        type="button"
                        className="btn mr-1 mt-1 btn-sm rounded shadow-lg"
                    >
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button
                        type="button"
                        className="btn mr-1 mt-1 btn-sm rounded shadow-lg"
                    >
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                    <button
                        type="button"
                        className="btn mr-1 mt-1 btn-sm rounded shadow-lg"
                    >
                        <img src="https://via.placeholder.com/250x140" alt="Show" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HBOMax;
