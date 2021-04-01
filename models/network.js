// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining Network Schema
const networkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
<<<<<<< HEAD
        type: String,
        required: true
    },
    network: {
        type: String,
        required: true
    }, 
=======
        type: String,
        required: true
    },
    network: {
        type: String,
        required: true
    },
>>>>>>> main
    poster_url: {
        type: String,
        required: true
    },
<<<<<<< HEAD
=======

>>>>>>> main
});

// Passing networkSchema instance to mongoose.model
const Network = mongoose.model("Network", networkSchema);

// Exporting Network Schema
module.exports = Network;
