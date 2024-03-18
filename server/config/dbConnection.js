const mongoose = require("mongoose");

async function dbConnection(collectionName) {
  try {
    const connect = await mongoose.connect(
      `${process.env.DB_CONNECTION}${collectionName}`
    );
    console.log("Connection Host:", connect.connection.host);
  } catch (e) {
    console.log("Error", e);
    process.exit(1);
  }
}

module.exports = dbConnection;
