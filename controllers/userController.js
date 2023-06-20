const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// register the user
module.exports.register = async function (req, res, next) {
  try {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      throw new Error(errors.array()[0].msg);
    }

    const user = await User.create(req.body);

    const token = jwt.sign({ id: user._id }, process.env.jwtSecretKey, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      message: "Sign up successful",
      userid: user._id,
      token: token,
    });
  } catch (err) {
    console.log("******", err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

// login the user and send the jwt token
module.exports.login = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && user.password === req.body.password) {
      const token = jwt.sign({ id: user._id }, process.env.jwtSecretKey, {
        expiresIn: "1d",
      });
      return res.status(200).json({
        success: "true",
        message: "Sign in successfully",
        token: token,
      });
    } else {
      return res.status(401).json({
        success: "false",
        message: "Invalid username and password",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.allUsers = async function (req, res) {
  try {
    const users = await User.find({}, "firstName lastName email phone");
    return res.status(200).json(users);
  } catch (err) {
    console.log("******", err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports.profile = async function (req, res) {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.status(200).json(user);
  } catch (err) {
    console.log("******", err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports.update = async function (req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });

    return res.send({
      message: "User updated successfully.",
    });
  } catch (err) {
    console.log("******", err);
    return res.status(400).json({
      message: err.message,
    });
  }
};
