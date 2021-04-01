import axios from "axios";

export default {
<<<<<<< HEAD
  // Gets all books
  getFilms: function (film) {
    return axios.get("/api/films/" + film);
  },
  getNetwork: function (network) {
    return axios.get("/api/network/" + network);
  },
=======
    // Gets searched api results
    getFilms: function (film) {
        return axios.get("/api/films/" + film);
    },

    getNetwork: function (network) {
        return axios.get("/api/network/" + network);
    }
>>>>>>> main
};
