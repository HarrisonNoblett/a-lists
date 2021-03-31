const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchListSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  network: {
    type: String,
    require: true,
  },
});

const WatchList = mongoose.model("WatchList", watchListSchema)

module.exports = WatchList;