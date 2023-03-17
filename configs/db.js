const moongose = require("mongoose");

async function connection() {
  await moongose.connect(process.env.MONGO);
}

module.exports = { connection };
