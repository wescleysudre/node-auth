var Person = require("../models/Person");

module.export = {
  all: function (req, res) {
    Person.find({}).lean().exec(function (err, people) {
      if (err)
        return res.json([]);

      return res.json(people);
    })
  }
};

