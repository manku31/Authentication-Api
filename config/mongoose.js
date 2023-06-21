const mongoose = require("mongoose");

// connect mongoose to mongodb
mongoose.connect("mongodb://localhost:27017/api");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to the Database :: MongoDB");
});

module.exports = db;