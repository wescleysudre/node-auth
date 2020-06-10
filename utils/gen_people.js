var mongoose = require("mongoose");
var faker = require("faker");
var Person = require("../models/Person");

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
      const p = new Person();
      p.name = faker.name.firstName();
      p.country = faker.address.country();
      p.email = faker.internet.email();
      p.company = faker.company.companyName();
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