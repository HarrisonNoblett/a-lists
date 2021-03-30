import axios from "axios";

export default {
    // Gets all books
    getFilms: function (film) {
        return axios.get("/api/films/" + film);
    },

};