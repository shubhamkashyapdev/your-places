const express = require("express");

const fileUpload = require("../middleware/file-upload");
const usersController = require("../controllers/users-controller");
const { body } = require("express-validator");
const auth = require("../middleware/check-auth");

const router = express.Router();

// route      GET, api/users
// desc       get all the users
// access     public

router.get("/", usersController.getUsers);

// route      POST, api/users/signup
// desc       create a new user
// access     Private

router.post(
  "/signup",
  [
    fileUpload.single("image"),
    [
      body("name", "Name is required").notEmpty(),
      body("email", "Please Enter a valid Email Address")
        .isEmail()
        .normalizeEmail(),
      body(
        "password",
        "Password length must be 10 or more characters"
      ).isLength({
        min: 10,
      }),
    ],
  ],
  usersController.signup
);

// route      POST, api/users/login
// desc       create a new user
// access     Private

router.post("/login", usersController.login);

router.delete("/", auth, usersController.deleteUser);

module.exports = router;
