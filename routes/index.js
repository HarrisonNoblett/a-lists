const path = require("path");
const router = require("express").Router();


// Watchmode
const BASEURL = "https://api.watchmode.com/v1/title/?";
// const TITLEURL = 
const APIKEY = "apiKey=I9EUr6mukSN5AgebHpQOr3SnnrTiIkfnuu7zYeoa";

// Ombd
const POSTERURL = "https://www.omdbapi.com/t=";
// cont APIKEY2 = "&apikey=b6e89a92";

router.get("/api/films/:film", function (req, res) {
    let film = req.params.movie;
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
"poster_url"