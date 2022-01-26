import express from "express";
export const bookRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
import {
  getUserById,
  isSignedIn,
  isAuthenticated,
  isAdmin,
} from "../auth/auth.middleware";
import {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "./book.controller";
import { getBookById } from "./book.middleware";
//-----------------------------------------------

//----------Using Controllers For Book--------------------
bookRouter.param("userId", getUserById);
bookRouter.param("bookId", getBookById);
bookRouter.get(
  "/:userId/getallbooks",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllBooks
);
bookRouter.get(
  "/:userId/:bookId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getBook
);
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
