const express = require("express");
const router = express.Router();
const { getLoginHandler } = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/common/decorate-html-response");

router.get("/", decorateHtmlResponse("Login"), getLoginHandler);

//exports
module.exports = router;
