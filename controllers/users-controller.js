const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");
const User = require("../models/users-model");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const err = new HttpError(
        "User Already Exists, Please Login Instead",
        400
      );
      return next(err);
    }
    const newUser = new User({
      name,
      email,
      password,
      image: req.file.path,
      places: [],
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    const payload = {
      user: newUser.id,
      email: newUser.email,
    };

    await jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          throw err;
        }
        console.log({ token });
        res.send({ userId: newUser.id, email: newUser.email, token });
      }
    );
  } catch (err) {
    const error = new HttpError("Could Not Signup, Please Try Again Later!!");
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new HttpError("User Doesn't Exists", 404));
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return next(new HttpError("Please Check Your Password", 401));
    }

    const payload = {
      userId: user.id,
      email: user.email,
    };
    await jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          throw err;
        }
        console.log({ token });
        res
          .status(200)
          .json({ user, userId: user.id, email: user.email, token });
      }
    );
  } catch (err) {
    const error = new HttpError("Could Not Login, Please Try Again Later!!");
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    console.log(req.userData);
    const user = await User.findById(req.userData.userId);
    console.log({ user });
    if (!user) {
      const error = new HttpError("No User Found", 404);
      return next(error);
    }
    if (req.userData.userId === user.id) {
      const error = new HttpError(
        `User Not Authorized To Delete This Place`,
        401
      );
      return next(error);
    }
    if (!user) {
      const error = new HttpError(
        `User Doesn't Exists, Can't Remove The User`,
        400
      );
      return next(error);
    }
    await user.remove();
    res.json({ user, msg: "User Deleted..." });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  signup,
  login,
  deleteUser,
};
