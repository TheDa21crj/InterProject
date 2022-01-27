const express = require("express");
const router = express.Router();
const fs = require("fs");
const { check, validationResult } = require("express-validator");
const Connect = require("../module/NoteSchema");

router.post(
  "/",
  [check("title", "Name is required").not().isEmpty()],
  [check("des", "des is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let d = new Date();
    let date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    const { title, des } = req.body;
    try {
      let NoteMakerData = new Connect({ title, des, date });
      await NoteMakerData.save();
      res.send(` ${title} and ${des} and ${date}`);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

router.get("/show", async (req, res) => {
  let data = await Connect.find();
  fs.writeFile(
    "./front/src/Data/NoteList.json",
    JSON.stringify(data),
    (err) => {
      console.log("done");
      console.log(err);
    }
  );
  res.send(data);
});

router.delete(
  "/delete",
  [check("title", "title is required")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title } = req.body;
    try {
      const data = await Connect.findOne({ title: title });
      const dataDelete = await Connect.deleteOne({ _id: data._id });
      res.send({ dataDelete });
    } catch (error) {
      console.log(error);
    }
  }
);

router.put(
  "/update",
  [check("title", "title is required")],
  [check("des", "des is required")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, des } = req.body;
    const data = await Connect.findOne({ title: title });
    const result = await Connect.updateOne(
      { _id: data._id },
      {
        $set: {
          des: des,
        },
      }
    );
    res.send(result);
  }
);

module.exports = router;
