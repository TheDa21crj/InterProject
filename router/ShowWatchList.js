const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Connect = require("../module/Schema");
const fs = require("fs");

router.get("/", async (req, res) => {
  let data = await Connect.find();
  fs.writeFile(
    "./front/src/Data/showList.json",
    JSON.stringify(data),
    (err) => {
      console.log("done");
      console.log(err);
    }
  );
  res.send(data);
});

module.exports = router;
