require("dotenv").config();
const express = require("express");
const { connection } = require("./configs/db");
const server = express();

server.get("/", async (req, res) => {
  res.send("welcome");
});

connection().then(
  server.listen(3000, () => {
    console.log("Connected");
  })
);
