const router = require("express").Router();
const networkRoutes = require("./networks");

router.use("/network", networkRoutes);

module.exports = router;
