import axios from "axios";

export default {
  // Gets all movies
  getWatchlist: function (email) {
    return axios.get("/api/watchlist/" + email);
  },
  // Deletes the movie with the given id
  deleteWatchlist: function (id) {
    return axios.delete("/api/watchlist/" + id);
  },
  // Saves a movie to the database
  saveWatchlist: function (watchlistData) {
    return axios.post("/api/watchlist", watchlistData);
  }
};
