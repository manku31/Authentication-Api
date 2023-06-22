const express = require("express");
const router = express.Router();
const validator = require("../validators/UserValidator");
const passport = require("passport");
const { body } = require("express-validator");
const User = require("../models/User");

const userController = require("../controllers/userController");

router.post("/register", validator.signUp(), userController.register);

router.post("/login", validator.logIn(), userController.login);

router.get(
  "/allusers",
  passport.authenticate("jwt", { session: false }),
  userController.allUsers
);

router.get(
  "/profile/:id",
  passport.authenticate("jwt", { session: false }),
  userController.profile
);

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  userController.update
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  userController.destroy
);

module.exports = router;
