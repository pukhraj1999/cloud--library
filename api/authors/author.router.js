const express = require("express");
const authorRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
const {
  getUserById,
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../auth/auth.middleware");
const {
  getAllAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("./author.controller");
const { getAuthorById } = require("./author.middleware");
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

//-------Exporting--------------------
module.exports = { authorRouter };
//------------------------------------
