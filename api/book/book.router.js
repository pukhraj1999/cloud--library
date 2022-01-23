import express from "express";
export const bookRouter = express.Router();

//--------Importing Controllers And Middlewares------------------
import { createBook } from "./book.controller";
import { uploadCover } from "./book.middleware";
//-----------------------------------------------

//----------Using Controllers For Book--------------------
bookRouter.post("/createbook", uploadCover, createBook);
//-------------------------------------------------------
