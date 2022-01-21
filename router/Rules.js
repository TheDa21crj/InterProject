const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Connect = require("../module/Rules");

router.post(
  "/",
  [check("rule", "rule is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { rule } = req.body;
    try {
      let watchlistData = new Connect({ rule });
      let save = await watchlistData.save();
      res.send(save);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

router.delete("/delete", async (req, res) => {
  const dataDelete = await Connect.deleteMany({});
  res.send({ dataDelete });
});

module.exports = router;
