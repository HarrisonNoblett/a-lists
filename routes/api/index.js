const router = require("express").Router();
const watchlistRoutes = require("./watchlist");

// Watchlist Routes
router.use("/watchlist", watchlistRoutes);

module.exports = router;

