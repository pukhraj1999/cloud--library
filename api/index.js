import express from "express";
export const allRoutes = express.Router();

//------Importing All Routes----------
import { authRouter } from "./auth";
//------------------------------------

//------Using All Routes--------------
allRoutes.use("/", authRouter);
//------------------------------------
