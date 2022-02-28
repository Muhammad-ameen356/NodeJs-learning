const Product = require('../model/product')
exports.getAddProduct = (req, res) => {
    res.render('form', { title: "Add product form" })
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.send("saved");
};

exports.fetchAll = (req, res) => {
    const products = Product.fetchAll();
    res.render("products", { products });
};

