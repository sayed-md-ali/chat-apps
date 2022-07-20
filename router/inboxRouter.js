const express = require("express");
const router = express.Router();
const { getInboxHandler } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorate-html-response");

router.get("/", decorateHtmlResponse("Inbox"), getInboxHandler);

//exports
module.exports = router;
