const express = require('express');
const bodyParser = require('body-parser');
const db = require('../Database');

var app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



db.query(`SELECT ID FROM businesses`, (err,ids) => {
  ids = ids.map(function(row) {
    return row.ID;
  });
  for (var i = 0; i < ids.length; i++) {
    app.get(`/api/reviews/${ids[i].toString()}`, function (req, res) {
      console.log(`${req.method} request received from ${req.url}`);
      var data = {};
      // query database for info from database
      var addressParams = req.url.split('/');
      var businessId = addressParams[addressParams.length - 1];
      db.getReviews(businessId, (data) => {
        res.send(data);
      });
    });
  }
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
