const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      const error = new HttpError("Authorization Failed", 403);
      return next(error);
    }
    try {
      const userData = await jwt.verify(token, process.env.JWT_SECRET);
      req.userData = { userId: userData.userId };
      next();
    } catch (err) {
      const error = new HttpError("Cannot Verify The Token", 401);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError("Authentication Failed", 401);
    return next(error);
  }
};

module.exports = auth;
