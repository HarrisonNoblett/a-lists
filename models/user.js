const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // url for thumbnail image
    email: {
        type: String,
        default: "",
        required: true
    },
    picture: {
        type: String,
        defaul: ""
    },
    // watchlist: [
    //     {
    //      type: Schema.Types.ObjectId,
    //      ref: "Watchlist"   
    //     }
    // ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;