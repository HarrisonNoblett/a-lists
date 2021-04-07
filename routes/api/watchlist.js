const router = require("express").Router();
const watchlistController = require("../../controllers/watchlistController");

// Matches with "/api/watchlist"
router
    .route("/")
    .post(watchlistController.create);

// Matches with "/api/watchlist/:user"
router
    .route("/:email")
    .get(watchlistController.findAll);
// Matches with "/api/watchlist/:id"
router
    .route("/:id")
    .get(watchlistController.findById)
    .delete(watchlistController.remove);

module.exports = router;