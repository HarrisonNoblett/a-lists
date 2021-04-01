import axios from "axios";

export default {
    // Gets searched api results
    getFilms: function (film) {
        return axios.get("/api/films/" + film);
    },

    getNetwork: function (network) {
        console.log(network)
        return axios.get("/api/networks/" + network);
    }
};
