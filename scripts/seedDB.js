const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/alists");

const filmSeed = [
  {
    title: "The Dead Zone",
    film_id: 5,
    thumbnail: "Stephen King",
    streamService: "Netflix",
    type: "Movie",
    date: new Date(Date.now()),
  },
];

const watchlistSeed = [
  {
    title: "Game of Thrones",
    network: "HBO Max"
  },
  {
    title: "Zack Snyder's Justice League: Justice Is Gray",
    network: "HBO Max",
  },
  {
    title: "Perry Mason",
    network: "HBO Max",
  },
  {
    title: "Irresistible",
    network: "HBO Max",
  },
  {
    title: "Raised by Wolves",
    network: "HBO Max",
  },
  {
    title: "Underwater",
    network: "HBO Max",
  },
  {
    title: "Sharp Objects",
    network: "HBO Max",
  },
  {
    title: "Godzilla: King of the Monsters",
    network: "HBO Max",
  },
  {
    title: "The Flight Attendant",
    network: "HBO Max",
  },
  {
    title: "The Witches",
    network: "HBO Max",
  },
];

const networkSeed = [
  {
    title: "Game of Thrones",
    type: "Show",
    network: "HBOMax",
    poster_url:
      "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2731,w_1889/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F04%2FGOT-Aftermath.jpeg",
  },
  {
    title: "Zack Snyder's Justice League: Justice Is Gray",
    type: "Movie",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY450_CR2,0,300,450_AL_.jpg",
  },
  {
    title: "Perry Mason",
    type: "Show",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BMDllMWRjNWMtM2U3Ny00YjAwLTlhNTgtOThjZTc2YmI2ZmRmXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
  },
  {
    title: "Irresistible",
    type: "Movie",
    network: "HBOMax",
    poster_url:
      "https://images-na.ssl-images-amazon.com/images/I/812rnBj4NIL._RI_.jpg",
  },
  {
    title: "Raised by Wolves",
    type: "Show",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BYWUzMGZjNjgtMzkwYS00MTdhLTlhYzItYTEzMjRjMjkzZmM3XkEyXkFqcGdeQXVyMTE5MzYzMDE5._V1_.jpg",
  },
  {
    title: "Underwater",
    type: "Movie",
    network: "HBOMax",
    poster_url:
      "https://www.laughingplace.com/w/wp-content/uploads/2019/08/fox-debuts-first-trailer-poster-for-underwater.png",
  },
  {
    title: "Sharp Objects",
    type: "Show",
    network: "HBOMax",
    poster_url:
      "https://images-na.ssl-images-amazon.com/images/I/710wiTEVcnL._AC_SL1177_.jpg",
  },
  {
    title: "Godzilla: King of the Monsters",
    type: "Movie",
    network: "HBOMax",
    poster_url:
      "https://d1w8cc2yygc27j.cloudfront.net/6280170057362467821/122010278868919792.jpg",
  },
  {
    title: "The Flight Attendant",
    type: "Show",
    network: "HBOMax",
    poster_url:
      "https://www.themoviedb.org/t/p/w500/8azUzeNTqdHlSjkc12A5s6fpS6P.jpg",
  },
  {
    title: "The Witches",
    type: "Movie",
    network: "HBOMax",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BNjRkYjlhMjEtYzIwOC00ZWYzLTgyMmQtYjI5M2UzNDJkNTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
];

// Inserting Film Seed
db.Film.remove({})
  .then(() => db.Film.collection.insertMany(filmSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Inserting Network Seed
db.Network.remove({})
  .then(() => db.Network.collection.insertMany(networkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.WatchList.remove({})
  .then(() => db.WatchList.collection.insertMany(watchlistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
