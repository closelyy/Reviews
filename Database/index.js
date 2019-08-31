const mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "yelp".

const db = mysql.createConnection({
  user: 'root',
  database: 'yelp',
});
module.exports = db;

db.connect();

module.exports.updateVote = (info, callback) => { // Export to ../server/server.js
  const dbQuery = `UPDATE reviews SET ${info.voteType} = ${info.voteType} + 1 WHERE ID = "${info.reviewId}"`;
  const data = info;
  db.query(dbQuery, (err) => {
    if (err) {
      data.msg = 'Error updating database';
      callback(data);
    } else {
      data.msg = 'Success';
      callback(data);
    }
  });
};

const getReviewsPhotoData = (data, callback) => {
  db.query(`SELECT * FROM PHOTOS WHERE BUSINESS_ID="${data.business.ID}"`, (err, photos) => {
    const newData = data.reviews.map((review) => {
      const newReview = review;
      for (let i = 0; i < photos.length; i += 1) {
        if (photos[i].USER_ID === newReview.USER_ID) {
          if (!newReview.photos) {
            newReview.photos = [];
          }
          newReview.photos.push(photos[i].ID);
        }
      }
      return newReview;
    });
    callback(newData);
  });
};

const getUserData = (data, callback) => { // Gets user data based on USER_ID's found in reviews data
  const userIds = [];
  data.reviews.forEach((review) => {
    userIds.push(review.USER_ID);
  });
  const newData = data;
  newData.userIds = userIds;
  let userQuery = 'SELECT * FROM USERS WHERE ';
  for (let i = 0; i < userIds.length; i += 1) {
    userQuery += `ID="${userIds[i]}"`;
    if (i === userIds.length - 1) {
      userQuery += ';';
    } else {
      userQuery += ' OR ';
    }
  }
  db.query(userQuery, (err, users) => {
    newData.reviews.map((review) => {
      const newReview = review;
      for (let i = 0; i < users.length; i += 1) {
        if (newReview.USER_ID === users[i].ID) {
          newReview.user = users[i];
        }
      }
      return newReview;
    });
    getReviewsPhotoData(newData, callback);
  });
};

const getReviewsData = (data, callback) => {
  db.query(`SELECT * FROM REVIEWS WHERE BUSINESS_ID="${data.business.ID}" ORDER BY STARS DESC LIMIT 20;`, (err, reviews) => {
    const newData = data;
    newData.reviews = reviews;
    getUserData(newData, callback);
  });
};

module.exports.getReviews = (id, callback) => { // Export to ../server/server.js
  db.query(`SELECT * FROM BUSINESSES WHERE ID="${id}";`, (err, business) => {
    const data = {};
    [data.business] = business;
    getReviewsData(data, callback);
  });
};
