const express = require("express");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const session = require("express-session");
const router = require("./router");
const sessionToLocals = require("./middlewares/sessionToLocals");

const app = express();
const PORT = process.env.PORT || 3000;
const secretSession = process.env.SECRET_SESSION;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(
  session({
    secret: secretSession,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(sessionToLocals);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
