const express = require("express");
const { check } = require("express-validator");
const authRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
const { signup, signin, signout } = require("./auth.controller");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("./auth.controller");
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getUserById,
} = require("./auth.middleware");
//-----------------------------------------------

//----------Using Controllers For Auth--------------------
authRouter.post(
  "/signup",
  [
    check("fname", "name should be atleast 3 characters").isLength({
      min: 3,
      max: 30,
    }),
    check("lname", "name should be atleast 3 characters").isLength({
      min: 3,
      max: 30,
    }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 6 character").isLength({
      min: 6,
    }),
  ],
  signup
);
authRouter.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "Invalid Credentials!!").isLength({
      min: 6,
    }),
  ],
  signin
);
authRouter.get("/signout", signout);
//-------------------------------------------------------

//----------Using Controllers For USER--------------------
authRouter.param("userId", getUserById);
authRouter.get(
  "/user/:userId/getusers",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllUsers
);
authRouter.get("/user/:userId", isSignedIn, getUser);
authRouter.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
authRouter.post(
  "/user/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteUser
);
//--------------------------------------------------------

//-------Exporting--------------------
module.exports = { authRouter };
//------------------------------------
