const express = require("express");
const productsController = require("../controllers/products");
const path = require("path");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth");

// Agar request URL sa hit horahi hy to get ki request hogi
router.get("/", authMiddleware, productsController.fetchAll);

router.get("/form", authMiddleware, productsController.getAddProduct);

router.post("/form", authMiddleware, productsController.postaddProduct);

module.exports = router;
