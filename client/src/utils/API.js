import axios from "axios";

export default {
    // Gets all movies
    getFilms: function (film) {
        return axios.get("/api/films/" + film);
    },

};