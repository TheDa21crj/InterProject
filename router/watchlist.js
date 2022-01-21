const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Connect = require("../module/Schema");

router.post(
  "/",
  [check("name", "Name is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name } = req.body;
    try {
      let watchlistData = new Connect({ name });
      await watchlistData.save();
      res.send(`Hello world ${name}`);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

router.delete("/", [check("name", "name is required")], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  const data = await Connect.findOne({ name: name });
  const dataDelete = await Connect.deleteOne({ _id: data._id });
  res.send({ dataDelete });
});

module.exports = router;
