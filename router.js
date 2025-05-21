const express = require("express");
const router = express.Router();

const { getLandingPage } = require("./controllers/landing.controllers");
const { getLogin, postLogin } = require("./controllers/login.controllers");

router.get("/", getLandingPage);
router.get("/login", getLogin);
router.post("/login", postLogin);

module.exports = router;
