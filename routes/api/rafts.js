const router = require("express").Router();
const controller = require("../../controllers/raftsController");
var passport = require("../../config/passport");


router.route("/rafts")
    .get(controller.findByUser)
    .get(controller.findByRaft)

module.exports = router