const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.authenticate = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, "secretKey");
    req.user = await User.findById(verified.userId);
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

exports.authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).send("Access Denied: Admins only");
  }
  next();
};
