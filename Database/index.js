var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "yelp".
var db = mysql.createConnection({
  user: 'root',
  database: 'yelp'
});
module.exports = db;

db.connect();

var getReviewsData = function(data, callback) {
  db.query(`SELECT * FROM REVIEWS WHERE BUSINESS_ID="${data.business.ID}"`, function(err, reviews) {
    data.reviews = reviews;
    getUserData(data, callback);
  });
}

var getUserData = function(data, callback) {
  var userIds = [];
  data.reviews.forEach(function(review) {
    userIds.push(review.USER_ID);
  });
  data.userIds = [];
  var userQuery = `SELECT * FROM USERS WHERE `;
  for (var i = 0; i < userIds.length; i++) {
    userQuery += `ID="${userIds[i]}"`;
    if (i === userIds.length - 1) {
      userQuery += `;`
    } else {
      userQuery += ` OR `
    }
  }
  db.query(userQuery, function(err, users) {
    data.reviews.forEach(function(review) {
      for (var i = 0; i < users.length; i++) {
        if (review.USER_ID === users[i].ID) {
          review.user = users[i];
        }
      }
    });
    getPhotoData(data, callback);
  });
}

var getReviewsPhotoData = function(data, callback) {
  db.query(`SELECT * FROM PHOTOS WHERE BUSINESS_ID="${data.business.ID}"`, function(err, photos) {
    data.reviews.forEach(function(review) {
      for(var i = 0; i < photos.length; i++) {
        if (photos[i].USER_ID === review.USER_ID) {
          console.log('found a photo associated with a review!')
          if (!review.photos) {
            review.photos = [];
          }
          review.photos.push(photos[i].ID);
        } else if (review.user.)
      }
    });
    getUserPhotoData(data, callback);
  });
}

var getUserPhotoData = function(data, callback) {
  console.log(data.userIds);
  var userQuery = `SELECT * FROM PHOTOS WHERE BUSINESS_ID="NULL" AND `;
  for (var i = 0; i < userIds.length; i++) {
    userQuery += `USER_ID="${userIds[i]}"`;
    if (i === userIds.length - 1) {
      userQuery += `;`
    } else {
      userQuery += ` OR `
    }
  }
  db.query(userQuery, function(err, photos) {
    data.reviews.forEach(function(review) {
      review.user.photo = '';
      for (var i = 0; i < photos.length; i++) {
        console.log(`found a user avatar image`);
        if (review.user.ID === photos[i].USER_ID) {
          review.user.photo = photos[i].ID;
        }
      }
    });
    callback(data);
  });
}


module.exports.getReviews = function(id, callback) {
  db.query(`SELECT * FROM BUSINESSES WHERE ID="${id}"`, function(err, business) {
    var data = {};
    data.business = business[0];
    getReviewsData(data, callback);
  });
}