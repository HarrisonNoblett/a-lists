const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/alists"
);

const filmSeed = [
    {
        title: "The Dead Zone",
        thumbnail: "Stephen King",
        streamService:
            "Netflix",
        date: new Date(Date.now())
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