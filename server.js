const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/watchlist", require("./router/watchlist"));
app.use("/api/showwatchList", require("./router/ShowWatchList"));
app.use("/api/notemaker", require("./router/NoteMaker"));

const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
