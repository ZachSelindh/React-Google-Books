const router = require("express").Router();
const googleAPIController = require("../../controllers/googleAPIController");

//@@ dest "api/google"
router.route("/").get(googleAPIController.findAll);

module.exports = router;
