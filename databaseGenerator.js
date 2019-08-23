const fs = require('fs');
const path = require('path');
const faker = require('faker');

var filePath = path.join(__dirname, `./schema.sql`);

// INSERT INTO users (ID, NAME, TOWNLOC, FRIENDS, REVIEWS, PHOTOS) 
//   VALUES ("LKAJASOI4F24902V4MVIOWE", "Susie Q", "Oakland, CA", 27, 99, 20);
var numUsers = 2000;
var numBusinesses = 100;
var numReviews = 4000;
var numPhotos = 1000;
var numMessages = 100;

module.exports.numPhotos = numPhotos;
//========================================================
// USERS SECTION
var createUser = function(index) {
  var user = {};
  user.id = index;
  user.name = faker.name.findName();
  user.townLoc = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
  user.friends = Math.floor(Math.random() * 1000);
  user.reviews = Math.floor(Math.random() * 1000);
  user.photos = Math.floor(Math.random() * 100);
  user.photo_id = 'NULL';
  return user;
}
var convertUsersToSql = function(users) {
  var sql = [];
  for (var i = 0; i < users.length; i++) {
    sql[i] = `INSERT INTO users (ID, NAME, TOWNLOC, FRIENDS, REVIEWS, PHOTOS, PHOTO_ID) VALUES ("${users[i].id}", "${users[i].name}", "${users[i].townLoc}", ${users[i].friends}, ${users[i].reviews}, ${users[i].photos}, "${users[i].photo_id}");`
  }
  sql = sql.join('\n');
  return sql;
}
var users = [];
for (var i = 1; i <= numUsers; i++) {
  users.push(createUser(i));
}
//========================================================
// BUSINESSES SECTION
var createBusiness = function(index) {
  var business = {};
  business.id = index;
  business.name = faker.company.companyName();
  business.review_count = 0;
  return business;
}
var convertBusinessesToSql = function(businesses) {
  var sql = [];
  for (var i = 0; i < businesses.length; i++) {
    sql[i] = `INSERT INTO businesses (ID, NAME, REVIEW_COUNT) VALUES ("${businesses[i].id}", "${businesses[i].name}", ${businesses[i].review_count});`;
  }
  sql = sql.join('\n');
  return sql;
}
var businesses = [];
for (var i = 1; i <= numBusinesses; i++) {
  businesses.push(createBusiness(i));
}
//========================================================
// REVIEWS SECTION
var createReview = function(index) {
  var review = {};
  review.id = index;
  review.user_id = users[Math.floor(Math.random() * numUsers)].id;
  review.business_id = (Math.floor(Math.random() * numBusinesses) + 1).toString();
  businesses[Number(review.business_id) - 1].review_count += 1;
  review.stars = Math.floor(Math.random() * 5) + 1;
  review.review_date = faker.date.between('2015-01-01', '2019-7-31')
  review.review_text = faker.lorem.paragraph();
  review.useful = Math.floor(Math.random() * 100);
  review.funny = Math.floor(Math.random() * 100);
  review.cool = Math.floor(Math.random() * 100);
  return review;
}
var convertReviewsToSql = function(reviews) {
  var sql = [];
  for (var i = 0; i < reviews.length; i++) {
    sql[i] = `INSERT INTO reviews (ID, USER_ID, BUSINESS_ID, STARS, REVIEW_DATE, REVIEW_TEXT, USEFUL, FUNNY, COOL) VALUES ("${reviews[i].id}", "${reviews[i].user_id}", "${reviews[i].business_id}", ${reviews[i].stars}, "${reviews[i].review_date}", "${reviews[i].review_text}", ${reviews[i].useful}, ${reviews[i].funny}, ${reviews[i].cool});`;
  }
  sql = sql.join('\n');
  return sql;
}
var reviews = [];
for (var i = 1; i <= numReviews; i++) {
  reviews.push(createReview(i));
}
//========================================================
// PHOTOS SECTION
var createPhoto = function(index) {
  var photo = {};
  photo.id = index;
  if (Math.random().toFixed(2) > .65) {
    photo.business_id = businesses[Math.floor(Math.random() * numBusinesses)].id;
  }
  photo.user_id = users[Math.floor(Math.random() * numUsers)].id;
  return photo;
}
var convertPhotosToSql = function(photos) {
  var sql = [];
  for (var i = 0; i < photos.length; i++) {
    sql[i] = `INSERT INTO photos (ID, BUSINESS_ID, USER_ID) VALUES ("${photos[i].id}", ${photos[i].business_id ? `"` + photos[i].business_id + `"` : "NULL"}, ${photos[i].user_id ? `"` + photos[i].user_id + `"` : "NULL"});`;
  }
  sql = sql.join('\n');
  return sql;
}
var photos = [];
for (var i = 1; i <= numPhotos; i++) {
  photos.push(createPhoto(i));
}
//========================================================
// MESSAGES SECTION
var createMessage = function(index) {
  var message = {};
  message.id = index;
  message.author_id = users[Math.floor(Math.random() * numUsers)].id;
  message.recipient_id = users[Math.floor(Math.random() * numUsers)].id;
  message.messageText = faker.lorem.paragraph();
  message.subject = faker.lorem.sentence();
  return message;
}
var convertMessagesToSql = function(messages) {
  var sql = [];
  for (var i = 0; i < messages.length; i++) {
    sql[i] = `INSERT INTO messages (ID, AUTHOR_ID, RECIPIENT_ID, SUBJECT, MESSAGETEXT) VALUES ("${messages[i].id}", "${messages[i].author_id}", "${messages[i].recipient_id}", "${messages[i].subject}", "${messages[i].messageText}");`;
  }
  sql = sql.join('\n');
  return sql;
}
var messages = [];
for (var i = 1; i <= numMessages; i++) {
  messages.push(createMessage(i));
}
//========================================================
// users = JSON.stringify(users);

var setup = `DROP DATABASE IF EXISTS YELP;
CREATE DATABASE YELP;
USE YELP;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS photos;
CREATE TABLE users (
  ID VARCHAR(255),
  -- UNIQUE USER ID
  NAME VARCHAR(100),
  -- USER'S NAME
  TOWNLOC VARCHAR(255),
  -- TOWN-LEVEL LOCATION OF REVIEWER
  FRIENDS INT,
  -- NUMBER OF FRIENDS
  REVIEWS INT,
  -- NUMBER OF REVIEWS CREATED
  PHOTOS INT,
  -- NUMBER OF PHOTOS POSTED
  PHOTO_ID VARCHAR(100),
  -- UNIQUE IDENTIFIER OF USER'S AVATAR IMAGE
  PRIMARY KEY (ID)
);
CREATE TABLE businesses (
  ID VARCHAR(100),
  -- UNIQUE IDENTIFIER OF BUSINESS
  NAME VARCHAR(255),
  -- NAME OF BUSINESS
  REVIEW_COUNT INT,
  -- TOTAL NUMBER OF REVIEWS
  PRIMARY KEY (ID)
);
CREATE TABLE reviews (
  /* Describe your table here.*/
  ID VARCHAR(255),
  -- UNIQUE IDENTIFIER OF REVIEW,
  USER_ID VARCHAR(255),
  -- USER ID ASSOCIATED WITH REVIEW,
  BUSINESS_ID VARCHAR(255),
  -- BUSINESS ID ASSOCIATED WITH REVIEW,
  STARS INT,
  -- STAR RATING,
  REVIEW_DATE VARCHAR(255),
  -- REVIEW DATE,
  REVIEW_TEXT VARCHAR(1000),
  -- REVIEW CONTENT,
  USEFUL INT,
  -- USEFUL VOTES,
  FUNNY INT,
  -- USEFUL VOTES,
  COOL INT,
  -- USEFUL VOTES,
  PRIMARY KEY (ID),
  FOREIGN KEY (USER_ID) 
    REFERENCES users(ID),
  FOREIGN KEY (BUSINESS_ID) 
    REFERENCES businesses(ID)
);
CREATE TABLE photos (
  ID VARCHAR(255),
  -- UNIQUE IDENTIFIER OF PHOTO
  BUSINESS_ID VARCHAR(255),
  -- UNIQUE IDENTIFIER OF ASSOCIATED REVIEW
  USER_ID VARCHAR(255),
  -- UNIQUE IDENTIFIER OF ASSOCIATED USER
  PRIMARY KEY (ID),
  FOREIGN KEY (BUSINESS_ID) 
    REFERENCES businesses(ID),
  FOREIGN KEY (user_id) 
    REFERENCES users(ID)
);
CREATE TABLE messages (
  ID VARCHAR(255),
  -- UNIQUE IDENTIFIER OF MESSAGE
  AUTHOR_ID VARCHAR(255),
  -- USER_ID OF AUTHOR OF MESSAGE
  RECIPIENT_ID VARCHAR(255),
  -- USER_ID OF RECIPIENT OF MESSAGE
  SUBJECT VARCHAR(255),
  -- SUBJECT/TITLE OF MESSAGE
  MESSAGETEXT VARCHAR(1000),
  -- TEXT CONTENT OF MESSAGE
  PRIMARY KEY (ID),
  FOREIGN KEY (AUTHOR_ID)
    REFERENCES users(ID),
  FOREIGN KEY (RECIPIENT_ID)
    REFERENCES users(ID)
);`;

users = convertUsersToSql(users);
businesses = convertBusinessesToSql(businesses);
reviews = convertReviewsToSql(reviews);
photos = convertPhotosToSql(photos);
messages = convertMessagesToSql(messages);

var data = setup + "\n" + users + "\n" + businesses + "\n" + reviews + "\n" + photos + "\n" + messages;
fs.writeFile(filePath, data, (err) => {
  if (err) {
    throw ('error writing content');
  } else {
    console.log('Success writing content!');
  }
});

