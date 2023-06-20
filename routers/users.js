const express = require("express");
const router = express.Router();
const validator = require("../validators/UserValidator");
const passport = require("passport");

const userController = require("../controllers/userController");

router.post("/register", validator.signUp(), userController.register);

router.post("/login", userController.login);

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

module.exports = router;
