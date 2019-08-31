const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../Database');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

db.query('SELECT ID FROM businesses', (err, ids) => { // Gets list of business IDs from the database, creates API routes for each one
  const businessIds = ids.map((row) => (
    row.ID
  ));
  for (let i = 0; i < businessIds.length; i += 1) {
    app.get(`/api/reviews/${businessIds[i].toString()}`, (req, res) => {
      console.log(`${req.method} request received from ${req.url}`);
      const addressParams = req.url.split('/');
      const businessId = addressParams[addressParams.length - 1];
      db.getReviews(businessId, (data) => {
        res.send(data);
      });
    });
  }
});

app.post('/api/reviews/vote', (req, res) => {
  console.log(`${req.method} request received from ${req.url}`);
  db.updateVote(req.body.info, (response) => {
    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
