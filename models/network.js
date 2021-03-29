// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining Network Schema
const networkSchema = new Schema({
    title: {
        type: String,
        required: ""
    },
    poster_url: {
        type: String,
        required: ""
    },
    network_url: {
        type: String,
        required: ""
    } 
});

// Passing networkSchema instance to mongoose.model
const Network = mongoose.model("Network", networkSchema);

// Exporting Network Schema
module.exports = Network;