import React from 'react';
import { useState } from "react";
import API from "../utils/API";

const HboMax = () => {

    const [film, setFilm] = useState("");

    function handleInputChange(event) {
        event.preventDefault();
        const filmInput = event.target.value;
        setFilm(filmInput);
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.getFilms(film)
    }

    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">HboMax</h1>
                </div>
            </div>
            <form>
                <input clas="form-control" placeholder="Enter Film" onChange={handleInputChange} onSubmit={handleSubmit}></input><button onClick={handleSubmit}>Submit</button>
            </form>
            <div class="jumbotron jumbotron-fluid">
                <div class="container m-0">
                    <p class="lead">Top Shows</p>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Show" /></button>
                </div>
            </div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container m-0">
                    <p class="lead">Top Movies</p>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                    <button type="button" class="btn mr-1 mt-1 btn-sm rounded shadow-lg"><img src="https://via.placeholder.com/250x140" alt="Movie" /></button>
                </div>
            </div>
        </div>
    );
}

export default HboMax;