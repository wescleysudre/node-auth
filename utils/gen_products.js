var mongoose = require("mongoose");
var faker = require("faker");
var Product = require("../models/Product");

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-rr2xs.mongodb.net/auth_test?retryWrites=true',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function add(n) {
  try {
    for (let i = 0; i < n; i++) {
      const p = new Product();
      p.name = faker.commerce.productName();
      p.department = faker.commerce.department();
      p.price = faker.commerce.price();
      await p.save()
    }
  }
  catch (err) {
    console.log(err);
  }


}

add(100)
  .then(() => {
    console.log("ok");
    mongoose.disconnect();
  })