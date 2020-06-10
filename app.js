const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

var api = require("./routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-rr2xs.mongodb.net/auth_test?retryWrites=true',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use('/api', api);

app.use(function (req, res, next) {
  res.status(404).send('Not Found');
})

app.listen(3000);