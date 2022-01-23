import express from "express";
export const authorRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
import {
  getUserById,
  isSignedIn,
  isAuthenticated,
  isAdmin,
} from "../auth/auth.middleware";
import {} from "./author.controller";
import {} from "./author.middleware";
//-----------------------------------------------

//----------Using Controllers For Book--------------------
authorRouter.param("userId", getUserById);
//-------------------------------------------------------
