import express from "express";
export const allRoutes = express.Router();

//------Importing All Routes----------
import { authRouter } from "./auth";
import { bookRouter } from "./book";
//------------------------------------

//------Using All Routes--------------
allRoutes.use("/", authRouter);
allRoutes.use("/book/", bookRouter);
//------------------------------------
