const express = require("express");
const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");
const app = express();
const port = 8000;

// Enable the body-parser middleware to parse URL
app.use(express.urlencoded());

// Enable the body-parser middleware to parse JSON data in incoming HTTP requests.
app.use(express.json());

// passport
app.use(passport.initialize());

// Routers request
app.use("/", require("./routers"));

// Server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in the Server, The Error is ${err}`);
  }

  console.log(`Server Running Fine on Port : ${port}`);
});
