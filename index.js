const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5300;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
