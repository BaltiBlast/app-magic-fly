const express = require("express");
require("dotenv").config();
const session = require("express-session");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 3000;
const secretSession = process.env.SECRET_SESSION;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(
  session({
    secret: secretSession,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
