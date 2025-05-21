const express = require("express");
const router = express.Router();

const { getLandingPage } = require("./controllers/landing.controllers");
const { getLogin, postLogin } = require("./controllers/login.controllers");
const { getDashboard } = require("./controllers/dashboard.controllers");

router.get("/", getLandingPage);

router.get("/login", getLogin);
router.post("/login", postLogin);

router.get("/dashboard", getDashboard);

module.exports = router;
