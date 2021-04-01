const router = require("express").Router();
const networkController = require("../../controllers/networkController");

// Matches with "/api/networks"
router.route("/:service")
    .get(networkController.find)


module.exports = router;