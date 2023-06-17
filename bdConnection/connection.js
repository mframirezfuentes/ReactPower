const db = require("mongoose");

db.Promise = global.Promise;
async function connect() {
  await db.connect(url, {
    useNewwUrlParser: true,
  });
  console.log("[db] Connected");
}

module.exports = connect;
