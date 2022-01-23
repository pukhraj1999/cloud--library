import express from "express";
export const allRoutes = express.Router();

//------Importing All Routes----------
import { authRouter } from "./auth";
import { bookRouter } from "./book";
import { authorRouter } from "./authors";
//------------------------------------

//------Using All Routes--------------
allRoutes.use("/", authRouter);
allRoutes.use("/book", bookRouter);
allRoutes.use("/author", authorRouter);
//------------------------------------
