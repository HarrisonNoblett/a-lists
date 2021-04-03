import axios from "axios";
require("dotenv").config();

// Watchmode
// const BASEURL = "https://api.watchmode.com/v1/search/?apiKey=";
// const ENDURL = "&search_field=name&search_value=";
// const WKEY = process.env.WMAPI_KEY;

// // Ombd
const POSTERURL = "http://omdbapi.com/?t="
const OKEY = "&apikey=eb41033e"
// const OKEY = process.env.OMBDKEY;

export default {
    // Gets all movies
    getTitles: function (title) {
        const url = "https://api.watchmode.com/v1/search/?apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa&search_field=name&search_value=" + title;
        return axios.get(url)
    },
    getInfo: function (id) {
        const APISEARCH = "https://api.watchmode.com/v1/title/" + id + "/details?apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa";
        return axios.get(APISEARCH)
    },
    getPoster: function (title) {
        return axios.get(POSTERURL + title + OKEY)
    }
}


// // Watchmode
// const WKEY = process.env.WMAPIKEY;
// const BASEURL = "https://api.watchmode.com/v1/search/?  apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa&search_field=name&search_value=";

// // Ombd
// const OKEY = process.env.OMBDKEY;
// const POSTERURL = "http://omdbapi.com/?t=" &apikey=eb41033e;


//TO GET ID & TITLE: ---------------

// network 1 = HBO;
// network 8 = Disney;
// network 1204, 2703, 2328 = Amazon;
// network 822 = appletv;
// network 431 = hulu;
// network 248, 2554 = netflix

// TO GET POSTER URL [TV SHOW] --------------------
//https:api.watchmode.com/v1/title/345534/seasons?apiKey= ---- &search_field=name&search_value=Game%20of%20Thrones