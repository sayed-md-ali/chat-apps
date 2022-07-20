const express = require("express");
const router = express.Router();
const { getUsersHandler } = require("../controller/usersHandler");
const decorateHtmlResponse = require("../middleware/common/decorate-html-response");

router.get("/", decorateHtmlResponse("Users"), getUsersHandler);

//exports
module.exports = router;
