const router = require("express").Router();
const watchlistRoutes = require("./watchlist");
const userRoutes = require("./userRoutes")

// Watchlist Routes
router.use("/watchlist", watchlistRoutes);

// User Routes
router.use("/user", userRoutes);

module.exports = router;

