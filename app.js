var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-rr2xs.mongodb.net/auth_test?retryWrites=true',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(function (req, res, next) {
  res.status(404).send('Not Found');
})

app.listen(3000);