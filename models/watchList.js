// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining Watchlist Schema
const watchlistSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    view_url: {
        type: String,
        required: true
    },
    network: {
        type: String,
        required: true
    },
    poster_url: {
        type: String,
        required: true
    }
});

// Passing WatchlistSchema instance to mongoose.model
const Watchlist = mongoose.model("Watchlist", watchlistSchema);

// Exporting Watchlist Schema
module.exports = Watchlist;
