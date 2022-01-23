import express from "express";
export const bookRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
import { createBook } from "./book.controller";
import { uploadBookCover } from "./book.middleware";
//-----------------------------------------------

//----------Using Controllers For Book--------------------
bookRouter.post("/createbook", uploadBookCover.single("coverImg"), createBook);
//-------------------------------------------------------
