const express = require("express");

const router = express.Router();
const { ensureAuthenticated } = require("./utils/middleware");

const { getLandingPage } = require("./controllers/landing.controllers");
const { getLogin, postLogin, postLogout } = require("./controllers/login.controllers");
const { getDashboard } = require("./controllers/dashboard.controllers");
const { postAddPicture, postDeletePicture } = require("./controllers/pictures.controllers");

router.get("/", getLandingPage);

router.get("/login", getLogin);
router.post("/login", postLogin);
router.post("/logout", postLogout);

router.get("/dashboard", ensureAuthenticated, getDashboard);

router.post("/add-picture", ensureAuthenticated, postAddPicture);
router.post("/delete-picture/:recordId/:publicId", ensureAuthenticated, postDeletePicture);

module.exports = router;
