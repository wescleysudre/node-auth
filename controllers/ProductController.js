var Product = require("../models/Product");

module.exports = {
  all: function (req, res) {
    Product.find({}).lean().exec(function (err, products) {
      if (err)
        return res.json([]);

      return res.json(products);
    })
  }
};

