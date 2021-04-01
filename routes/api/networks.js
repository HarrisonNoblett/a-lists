const router = require("express").Router();
const netwroksController = require("../../controllers/networksController")

// Matches with "/api/networks/:service"
router.route("/:service").get(netwroksController.find)

module.exports = router;