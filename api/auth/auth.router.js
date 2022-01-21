import express from "express";
import { check } from "express-validator";
export const authRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
import { signup, signin, signout } from "./auth.controller";
import { getAllUsers, getUser } from "./auth.controller";
import {
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getUserById,
} from "./auth.middleware";
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
    check("password", "password should be atleast 6 character").isLength({
      min: 6,
    }),
  ],
  signin
);
authRouter.get("/signout", signout);
//-------------------------------------------------------

//----------Using Controllers For USER--------------------
authRouter.get("/getusers", getAllUsers);
authRouter.param("userId", getUserById);
authRouter.get("/user/:userId", isSignedInz, getUser);
//--------------------------------------------------------
