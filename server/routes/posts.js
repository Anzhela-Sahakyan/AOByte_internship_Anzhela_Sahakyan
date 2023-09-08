const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post("/", (req, res) => {
  const newPost = req.body;

  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../src/db.json"))
  );

  data.posts.push(newPost);

  fs.writeFileSync(
    path.join(
      path.join(__dirname, "../src/db.json"),
      JSON.stringify(data, null, 2)
    )
  );

  res.status(200).send("Post added successfully");
});

const dataFilePath = path.join(__dirname, "../src/db.json");
router.get("/", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(path.join(__dirname, "../src/db.json")))
  );
  res.json(data.posts);
});

module.exports = router;
