const express = require("express");
require("dotenv").config();
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
