const path = require("path");
const router = require("express").Router();
const axios = require("axios");

// Watchmode
const BASEURL = "https://api.watchmode.com/v1/search/?apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa&search_field=name&search_value=";
// const APISEARCH = "&search_field=name&search_value=";
// const APIKEY = "apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa";

// Ombd
const POSTERURL = "https://www.omdbapi.com/t=";
const OBMDKEY = "&apikey=b6e89a92";

router.get("/api/films/:film", function (req, res) {
    let film = req.params.film;
    console.log(film)
    axios.get(BASEURL + film)
        .then(x => {
            console.log(x.data);
            const id = x.data.title_results[0].id
            const APISEARCH = "https://api.watchmode.com/v1/title/" + id + "/details?apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa";
            axios.get(APISEARCH)
                .then(y => {
                    console.log(y.data);
                    const network = y.data
                })
            res.json(x.data);
        })


})

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

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
"poster_url"*/