const express = require("express");
const path = require("path");
const router = express.Router();

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});

// Agar request URL sa hit horahi hy to get ki request hogi

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "form.html"));
});

module.exports = router;
