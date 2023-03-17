require("dotenv").config();
const express = require("express");
const { connection } = require("./configs/db");
const longinroute = require("./routes/Login.route");
const productroute = require("./routes/Post.routes");
const server = express();
const cors = require("cors");
server.use(express.json());

server.use(
  cors({
    origin: "*",
  })
);
server.get("/", async (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

server.use("/user", longinroute);
server.use("/products", productroute);

server.listen(process.env.PORT, async (req, res) => {
  try {
    await connection;
    console.log("first");
  } catch (error) {
    console.log("error");
  }
});
