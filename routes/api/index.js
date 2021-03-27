import axios from "axios";
// Watchmode
const BASEURL = "https://api.watchmode.com/v1/title/?";
// const TITLEURL = 
const APIKEY = "apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa";

// Ombd
const POSTERURL = ""
cont APIKEY2 = ""

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};

/* TO GET ID & TITLE: ---------------
https://api.watchmode.com/v1/search/?apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa&search_field=name&search_value=Game%20of%20Thrones
(GAME OF THRONES ID = 345534)
(Sleeping Beautry ID= 1350994)

TO GET NETWORK & TITLE: -------------
https://api.watchmode.com/v1/title/345534/details?apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa&search_field=name&search_value=Game%20of%20Thrones
network 1 = HBO;
network 8 = Disney;
network 1204, 2703, 2328 = Amazon;
network 822 = appletv;
network 431 = hulu;
network 248, 2554 = netflix

TO GET POSTER URL [TV SHOW] --------------------
https://api.watchmode.com/v1/title/345534/seasons?apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa&search_field=name&search_value=Game%20of%20Thrones
"poster_url"





// / const router = require("express").Router();
// const filmRoutes = require("./film");

// // Film routes
// router.use("/film", filmRoutes);

// module.exports = router;