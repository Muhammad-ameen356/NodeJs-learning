
exports.getAddProduct = (req, res) => {
  //   res.sendFile(path.join(__dirname, "../", "views", "form.html"));
  res.render("form", { title: "Add product form" });
};

exports.postaddProduct = (req, res) => {
  products.push(req.body);
  res.send("Saved");
};

exports.fetchAll = (req, res) => {
  res.render("products", { products });
};
