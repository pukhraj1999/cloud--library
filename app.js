const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

//--------Connecting database---------------------
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Successfully Connected!");
  }
);
//-------------------------------------------------

const app = express();

//----------MiddleWare-------------------------------------
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());
// app.use("/api/uploads", express.static("uploads"));
//----------------------------------------------------------

//----------Routes-------------------------------------
const allRoutes = require("./api/index");
app.use("/api", allRoutes);
//---------------------------------------------------------

//----------Deploying-------------------------------------
///testing...
//---------------------------------------------------------

//--------Hosting on local server-------------------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
//---------------------------------------------------------------
