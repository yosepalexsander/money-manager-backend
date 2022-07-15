const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(8000, () => {
  console.log("server running on port:", PORT);
});
