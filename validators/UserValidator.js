const { body } = require("express-validator");
const User = require("../models/User");

const signUp = function (req, res, next) {
  return [
    body("firstName", "firstName is required").isString(),
    body("lastName", "lastName is required").isString(),
    body("email", "Email is required")
      .isEmail()
      .custom((email, req) => {
        return User.findOne({ email: email })
          .then((user) => {
            if (user) {
              throw new Error("Email Already Exists");
            } else {
              return true;
            }
          })
          .catch((e) => {
            throw new Error(e.message);
          });
      }),

    body("phone", "Phone number is required")
      .isNumeric()
      .isLength({ min: 10, max: 10 })
      .withMessage("Invalid Phone number")
      .custom((phone, req) => {
        return User.findOne({ phone: phone })
          .then((user) => {
            if (user) {
              throw new Error("Phone Already Exists");
            } else {
              return true;
            }
          })
          .catch((e) => {
            throw new Error(e.message);
          });
      }),

    body("password", "Password is required")
      .isAlphanumeric()
      .isLength({ min: 6, max: 10 })
      .withMessage("Password must be between 6-10 characters"),

    body("passwordConfirmation", "Password doesn't match.").custom(
      (value, req) => {
        return req.body.passwordConfirmation === req.body.password;
      }
    ),
  ];
};


module.exports = {
  signUp,
}
