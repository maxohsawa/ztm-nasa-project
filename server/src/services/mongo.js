const mongoose = require("mongoose");
require("dotenv").config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = "nasa";
const MONGODB_ATLAS_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@nasacluster.i6sbf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection open");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGODB_ATLAS_URL);
}

module.exports = {
  mongoConnect,
};
