const jwt = require("jsonwebtoken");
const User = require("./user.model");

//---------------AUTH MIDDLEWARE------------------------------------------------------
exports.isSignedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = jwt.verify(token, process.env.SECRET);
    req.auth = verify;
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized user" });
  }
};

exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) return res.status(403).json({ error: "Access Denied!!" });
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0)
    return res.status(403).json({ error: "Access Denied!!!" });
  next();
};
//------------------------------------------------------------------------------------

//---------USER MIDDLEWARE------------------------------------------------------------
exports.getUserById = (req, res, next, id) => {
  User.findById(id, (err, user) => {
    if (err) return res.status(422).json({ error: "User Not Found By ID" });
    req.profile = user;
    next();
  });
};
//------------------------------------------------------------------------------------
