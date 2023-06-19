const db = require("mongoose");
import config from "../config";

db.Promise = global.Promise;

async function connect() {
  await db.connect(config.dbUrl, {
    useNewUrlParser: true,
  });
  console.log("[db] Connected");
}

module.exports = connect;