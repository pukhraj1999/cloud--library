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
import { getBookById, uploadCover } from "./book.middleware";
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
  uploadCover,
  createBook
);
bookRouter.post(
  "/:userId/updatebook/:bookId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  uploadCover,
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
