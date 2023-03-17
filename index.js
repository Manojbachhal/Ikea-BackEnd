require("dotenv").config();
const express = require("express");
const { connection } = require("./configs/db");
const server = express();

server.get("/", async (req, res) => {
  res.send("welcome");
});

server.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
  } catch (error) {
    console.log("error");
  }
});
