const express = require("express");
const router = express.Router();

const { getLandingPage } = require("./controllers/landingpage/landing.controllers");

router.get("/", getLandingPage);

module.exports = router;
