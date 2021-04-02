const router = require("express").Router();
const watchlistController = require("../../controllers/watchlistController");

// Matches with "/api/networks"
router.route("/")
    .get(watchlistController.findAll)
    .post(watchlistController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(watchlistController.findById)
    .delete(watchlistController.remove);


module.exports = router;