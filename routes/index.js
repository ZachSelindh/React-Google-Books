const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// Send React start point if no API routes are called.
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
  // Non-build path
  /* res.sendFile(path.join(__dirname, "../client/index.html")); */
});

module.exports = router;
