const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  //   res.sendFile(path.join(__dirname, "../", "views", "form.html"));
  res.render("form", { title: "Add product form" });
};

exports.postaddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.send("Saved");
};

exports.fetchAll = (req, res) => {
  const products = Product.fetchAll();
  res.render("products", { products });
};
