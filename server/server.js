const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../Database');

const app = express();

// const port = process.env.PORT || 3001;
const port = 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get(`/api/reviews/:businessId`, (req, res) => {
  console.log(`${req.method} request received from ${req.url}`);
  db.getReviews(req.params.businessId, (data) => {
    res.send(data);
  });
});


app.post('/api/reviews/vote', (req, res) => {
  console.log(`${req.method} request received from ${req.url}`);
  console.log(req.body);
  db.updateVote(req.body.info, (response) => {
    res.send(response);
  });
});

app.post(`/api/reviews/search`, (req, res) => {
  console.log(`${req.method} request received from ${req.url}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
