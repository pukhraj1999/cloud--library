import expressJWT from "express-jwt";
import User from "./user.model";
//---------------AUTH MIDDLEWARE------------------------------------------------------
export const isSignedIn = () =>
  expressJWT({
    secret: process.env.SECRET,
    userProperty: "auth",
  });

export const isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id === req.auth._id;
  if (!checker) return res.status(403).json({ message: "Access Denied!!" });
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.profile.role === 0)
    return res.status(403).json({ message: "Access Denied!!!" });
  next();
};
//------------------------------------------------------------------------------------

//---------USER MIDDLEWARE------------------------------------------------------------
export const getUserById = (req, res, next, id) => {
  User.findById(id, (err, user) => {
    if (err) return res.status(422).json({ error: "User Not Found By ID" });
    req.profile = user;
    next();
  });
};
//------------------------------------------------------------------------------------
