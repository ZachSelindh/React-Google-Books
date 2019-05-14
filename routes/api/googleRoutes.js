const router = require("express").Router();
const googleAPIController = require("../../controllers/googleAPIController");

//@@ dest "api/google"
router.route("/").get(googleAPIController.findBooks);

module.exports = router;
