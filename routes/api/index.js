const router = require("express").Router();
const networkRoutes = require("./networks");


// Network Routes
router.use("/network", networkRoutes);

module.exports = router;

