const express = require("express");

const router = express.Router();
const { ensureAuthenticated } = require("./utils/middleware");

const { getLandingPage } = require("./controllers/landing.controllers");
const { getLogin, postLogin } = require("./controllers/login.controllers");
const { getDashboard } = require("./controllers/dashboard.controllers");
const { postPicture } = require("./controllers/pictures.controllers");

router.get("/", getLandingPage);

router.get("/login", getLogin);
router.post("/login", postLogin);

router.get("/dashboard", ensureAuthenticated, getDashboard);

router.post("/add-picture", ensureAuthenticated, postPicture);

module.exports = router;
