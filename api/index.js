const express = require("express");
const allRoutes = express.Router();

//------Importing All Routes----------
const { authRouter } = require("./auth/index");
const { bookRouter } = require("./book/index");
const { authorRouter } = require("./authors/index");
//------------------------------------

//------Using All Routes--------------
allRoutes.use("/", authRouter);
allRoutes.use("/book", bookRouter);
allRoutes.use("/author", authorRouter);
//------------------------------------

//-------Exporting--------------------
module.exports = allRoutes;
//------------------------------------
