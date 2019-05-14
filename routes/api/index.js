const router = require("express").Router();
const googleRoutes = require("./googleRoutes");
const bookRoutes = require("./bookRoutes");

// Book routes
router.use("/google", googleRoutes);
/* router.use("/books", bookRoutes); */

module.exports = router;
