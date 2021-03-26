const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // url for thumbnail image
    thumbnail: {
        type: String,
        default: ""
    },

    streamService: {
        type: String,
        default: "",
    }

});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;