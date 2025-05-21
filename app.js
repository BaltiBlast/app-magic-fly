const express = require("express");
require("dotenv").config();
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
