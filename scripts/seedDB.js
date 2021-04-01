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
    network: "HBO Max",
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
    network: "HBO Max",
    poster_url:
      "https://hbomax-images.warnermediacdn.com/images/GVU2cggagzYNJjhsJATwo/tileburnedin?size=640x360&format=jpeg&partner=hbomaxcom&productCode=hbomax&host=artist.api.cdn.hbo.com&w=640",
  },
  {
    title: "Zack Snyder's Justice League: Justice Is Gray",
    type: "Movie",
    network: "HBO Max",
    poster_url:
      "https://static.wikia.nocookie.net/dccu/images/f/fd/ZSJL_poster_-_League_together.png/revision/latest?cb=20210302174150",
  },
  {
    title: "Perry Mason",
    type: "Show",
    network: "HBO Max",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BMDllMWRjNWMtM2U3Ny00YjAwLTlhNTgtOThjZTc2YmI2ZmRmXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
  },
  {
    title: "Irresistible",
    type: "Movie",
    network: "HBO Max",
    poster_url:
      "https://images-na.ssl-images-amazon.com/images/I/812rnBj4NIL._RI_.jpg",
  },
  {
    title: "Raised by Wolves",
    type: "Show",
    network: "HBO Max",
    poster_url:
      "https://m.media-amazon.com/images/M/MV5BYWUzMGZjNjgtMzkwYS00MTdhLTlhYzItYTEzMjRjMjkzZmM3XkEyXkFqcGdeQXVyMTE5MzYzMDE5._V1_.jpg",
  },
  {
    title: "Underwater",
    type: "Movie",
    network: "HBO Max",
    poster_url:
      "https://www.laughingplace.com/w/wp-content/uploads/2019/08/fox-debuts-first-trailer-poster-for-underwater.png",
  },
  {
    title: "Sharp Objects",
    type: "Show",
    network: "HBO Max",
    poster_url:
      "https://images-na.ssl-images-amazon.com/images/I/710wiTEVcnL._AC_SL1177_.jpg",
  },
  {
    title: "Godzilla: King of the Monsters",
    type: "Movie",
    network: "HBO Max",
    poster_url:
      "https://d1w8cc2yygc27j.cloudfront.net/6280170057362467821/122010278868919792.jpg",
  },
  {
    title: "The Flight Attendant",
    type: "Show",
    network: "HBO Max",
    poster_url:
      "https://www.themoviedb.org/t/p/w500/8azUzeNTqdHlSjkc12A5s6fpS6P.jpg",
  },
  {
    title: "The Witches",
    type: "Movie",
    network: "HBO Max",
    poster_url:
      "https://deadline.com/wp-content/uploads/2020/10/witches-1-e1601613994504.jpg",
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
