const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/alists"
);

const filmSeed = [
    {
        title: "The Dead Zone",
        film_id: 5,
        thumbnail: "Stephen King",
        streamService:
            "Netflix",
        type: "Movie",
        date: new Date(Date.now())
    }
]

const networkSeed = [
    {
        title: "",
        type: "",
        network: "",
        poster_url: ""
    }
]

db.Film
    .remove({})
    .then(() => db.Film.collection.insertMany(filmSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });