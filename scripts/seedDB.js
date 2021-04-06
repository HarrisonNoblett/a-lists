const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/alists");

const userSeed = [
  {
    name: "Adam Baum",
    email: "email@abaum.com",
    password: "adambaum"
  },
  {
    name: "Marsha Mellow",
    email: "email@mmellow.com",
    password: "marshamellow"
  },
  {
    name: "Royal Payne",
    email: "email@royalpayne.com",
    password: "royalpayne"
  }
];

const watchlistSeed = [
  {
    title: "Game of Thrones",
    view_url: "Show",
    network: "HBOMax",
    poster_url:
      "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2731,w_1889/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F04%2FGOT-Aftermath.jpeg",
  },
  {
    title: "Zack Snyder's Justice League: Justice Is Gray",
    view_url: "Movie",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY450_CR2,0,300,450_AL_.jpg",
  },
  {
    title: "Perry Mason",
    view_url: "Show",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BMDllMWRjNWMtM2U3Ny00YjAwLTlhNTgtOThjZTc2YmI2ZmRmXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
  },
  {
    title: "Irresistible",
    view_url: "Movie",
    network: "HBOMax",
    poster_url:
      "https://images-na.ssl-images-amazon.com/images/I/812rnBj4NIL._RI_.jpg",
  },
  {
    title: "Raised by Wolves",
    view_url: "Show",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BYWUzMGZjNjgtMzkwYS00MTdhLTlhYzItYTEzMjRjMjkzZmM3XkEyXkFqcGdeQXVyMTE5MzYzMDE5._V1_.jpg",
  },
  {
    title: "Underwater",
    view_url: "Movie",
    network: "HBOMax",
    poster_url:
      "https://www.laughingplace.com/w/wp-content/uploads/2019/08/fox-debuts-first-trailer-poster-for-underwater.png",
  },
  {
    title: "Sharp Objects",
    view_url: "Show",
    network: "HBOMax",
    poster_url:
      "https://images-na.ssl-images-amazon.com/images/I/710wiTEVcnL._AC_SL1177_.jpg",
  },
  {
    title: "Godzilla: King of the Monsters",
    view_url: "Movie",
    network: "HBOMax",
    poster_url:
      "https://d1w8cc2yygc27j.cloudfront.net/6280170057362467821/122010278868919792.jpg",
  },
  {
    title: "The Flight Attendant",
    view_url: "Show",
    network: "HBOMax",
    poster_url:
      "https://www.themoviedb.org/t/p/w500/8azUzeNTqdHlSjkc12A5s6fpS6P.jpg",
  },
  {
    title: "The Witches",
    view_url: "Movie",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BNjRkYjlhMjEtYzIwOC00ZWYzLTgyMmQtYjI5M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
];

// Inserting Watchlist Seed

db.Watchlist.remove({})
  .then(() => db.Watchlist.collection.insertMany(watchlistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Inserting User Seed
db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
