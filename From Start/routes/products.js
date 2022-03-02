const express = require("express");
const productsController = require("../controllers/products");
const path = require("path");
const router = express.Router();

// Agar request URL sa hit horahi hy to get ki request hogi
router.get("/", productsController.fetchAll);

router.get("/form", productsController.getAddProduct);

router.post("/form", productsController.postaddProduct);


module.exports = router;
