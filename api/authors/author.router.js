import express from "express";
export const authorRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
import {
  getUserById,
  isSignedIn,
  isAuthenticated,
  isAdmin,
} from "../auth/auth.middleware";
import {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "./author.controller";
import { getAuthorById } from "./author.middleware";
//-----------------------------------------------

//----------Using Controllers For Author--------------------
authorRouter.param("userId", getUserById);
authorRouter.param("authorId", getAuthorById);
authorRouter.get("/getallauthors", getAllAuthors);
authorRouter.get("/:authorId", getAuthor);
authorRouter.post(
  "/:userId/createauthor",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createAuthor
);
authorRouter.put(
  "/:userId/updateauthor/:authorId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateAuthor
);
authorRouter.delete(
  "/:userId/deleteauthor/:authorId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteAuthor
);
//-------------------------------------------------------
