const express = require("express");
const router = express.Router();

const posts = [{ title: "My Title", description: "My Description" }];

router.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

router.post("/post", (req, res) => {
  const { title, description } = req.body;
  console.log(title, description , "description", req.body);
  posts.push({ title, description });
  res.status(201).json(posts); 
});

module.exports = router;
