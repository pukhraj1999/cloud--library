const express = require("express");
const bookRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
const {
  getUserById,
  isSignedIn,
  isAuthenticated,
  isAdmin,
} = require("../auth/auth.middleware");
const {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const { getBookById } = require("./book.middleware");
//-----------------------------------------------

//----------Using Controllers For Book--------------------
bookRouter.param("userId", getUserById);
bookRouter.param("bookId", getBookById);
bookRouter.get("/getallbooks", getAllBooks);
bookRouter.get("/:bookId", getBook);
bookRouter.post(
  "/:userId/createbook",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createBook
);
bookRouter.put(
  "/:userId/updatebook/:bookId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateBook
);
bookRouter.delete(
  "/:userId/deletebook/:bookId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteBook
);
//-------------------------------------------------------

//-------Exporting--------------------
module.exports = { bookRouter };
//------------------------------------
