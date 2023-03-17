const express = require("express");
const server = express();

server.get("/", async (req, res) => {
  res.send("welcome");
});

server.listen(3000, () => {
  console.log(Connected);
});
