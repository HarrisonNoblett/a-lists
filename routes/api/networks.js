const router = require("express").Router();
const networkController = require("../../controllers/networkController");

// Matches with "/api/books"
router.route("/")
    .get(networkController.findAll)
    .post(networkController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .delete(networkController.remove);

module.exports = router;