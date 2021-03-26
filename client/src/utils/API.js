import axios from "axios";

export default {
    // Gets all books
    getFilms: function () {
        return axios.get("/api/film");
    },


};