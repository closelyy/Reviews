const fs = require('fs');
const path = require('path');
const faker = require('faker');

const filePath = path.join(__dirname, './schema.sql');
const numUsers = 300;
const numBusinesses = 100;
const numReviews = 4000;
const numPhotos = 1000;
const numMessages = 100;
const photoToUserIds = [];

module.exports.numPhotos = numPhotos;

// USERS SECTION
const createUser = (index) => {
  const user = {};
  user.id = index;
  user.name = faker.name.findName();
  user.townLoc = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
  user.friends = Math.floor(Math.random() * 1000);
  user.reviews = Math.floor(Math.random() * 1000);
  user.photos = Math.floor(Math.random() * 100);
  let photoId = Math.floor(Math.random() * numPhotos + 1);
  while (photoToUserIds.includes(photoId)) {
    photoId = Math.floor(Math.random() * numPhotos + 1);
  }
  photoToUserIds.push([photoId, user.id]);
  user.photo_id = photoId.toString();
  return user;
};
const convertUsersToSql = (users) => {
  let sql = [];
  for (let i = 0; i < users.length; i += 1) {
    sql[i] = `INSERT INTO users (ID, NAME, TOWNLOC, FRIENDS, REVIEWS, PHOTOS, PHOTO_ID)
    VALUES ("${users[i].id}", "${users[i].name}", "${users[i].townLoc}", ${users[i].friends}, ${users[i].reviews}, ${users[i].photos}, "${users[i].photo_id}");`;
  }
  sql = sql.join('\n');
  return sql;
};
let users = [];
for (let i = 1; i <= numUsers; i += 1) {
  users.push(createUser(i));
}

// BUSINESSES SECTION
const createBusiness = (index) => {
  const business = {};
  business.id = index;
  business.name = faker.company.companyName();
  business.review_count = 0;
  return business;
};
const convertBusinessesToSql = (businesses) => {
  let sql = [];
  for (let i = 0; i < businesses.length; i += 1) {
    sql[i] = `INSERT INTO businesses (ID, NAME, REVIEW_COUNT) VALUES ("${businesses[i].id}", "${businesses[i].name}", ${businesses[i].review_count});`;
  }
  sql = sql.join('\n');
  return sql;
};
let businesses = [];
for (let i = 1; i <= numBusinesses; i += 1) {
  businesses.push(createBusiness(i));
}

// REVIEWS SECTION
const createReview = (index) => {
  const review = {};
  review.id = index;
  review.user_id = users[Math.floor(Math.random() * numUsers)].id;
  review.business_id = (Math.floor(Math.random() * numBusinesses) + 1).toString();
  businesses[Number(review.business_id) - 1].review_count += 1;
  review.stars = Math.floor(Math.random() * 5) + 1;
  review.review_date = faker.date.between('2015-01-01', '2019-7-31');
  review.review_text = faker.lorem.paragraphs(5);
  review.useful = Math.floor(Math.random() * 100);
  review.funny = Math.floor(Math.random() * 100);
  review.cool = Math.floor(Math.random() * 100);
  return review;
};
const convertReviewsToSql = (reviews) => {
  let sql = [];
  for (let i = 0; i < reviews.length; i += 1) {
    sql[i] = `INSERT INTO reviews (ID, USER_ID, BUSINESS_ID, STARS, REVIEW_DATE, REVIEW_TEXT, USEFUL, FUNNY, COOL) VALUES ("${reviews[i].id}", "${reviews[i].user_id}", "${reviews[i].business_id}", ${reviews[i].stars}, "${reviews[i].review_date}", "${reviews[i].review_text}", ${reviews[i].useful}, ${reviews[i].funny}, ${reviews[i].cool});`;
  }
  sql = sql.join('\n');
  return sql;
};
let reviews = [];
for (let i = 1; i <= numReviews; i += 1) {
  reviews.push(createReview(i));
}

// PHOTOS SECTION
const avatarIds = [];
const photoIds = [];
photoToUserIds.forEach((ele) => {
  avatarIds.push(ele[1]);
  photoIds.push(ele[0]);
});
module.exports.photoIds = photoIds;
const createPhoto = (index) => {
  const photo = {};
  photo.id = index;
  const i = photoIds.indexOf(index);
  if (i > -1) {
    photo.user_id = avatarIds[i];
    photo.business_id = 'NULL';
  } else {
    photo.business_id = businesses[Math.floor(Math.random() * numBusinesses)].id;
    photo.user_id = users[Math.floor(Math.random() * numUsers)].id;
  }
  return photo;
};
const convertPhotosToSql = (photos) => {
  let sql = [];
  for (let i = 0; i < photos.length; i += 1) {
    sql[i] = `INSERT INTO photos (ID, BUSINESS_ID, USER_ID) 
    VALUES ("${photos[i].id}", ${photos[i].business_id === "NULL" ? null : ['"', photos[i].business_id, '"'].join('') }, "${photos[i].user_id}");`;
  }
  sql = sql.join('\n');
  return sql;
};
let photos = [];
for (let i = 1; i <= numPhotos; i += 1) {
  photos.push(createPhoto(i));
}

// MESSAGES SECTION
const createMessage = (index) => {
  const message = {};
  message.id = index;
  message.author_id = users[Math.floor(Math.random() * numUsers)].id;
  message.recipient_id = users[Math.floor(Math.random() * numUsers)].id;
  message.messageText = faker.lorem.paragraph(1);
  message.subject = faker.lorem.sentence();
  return message;
};
const convertMessagesToSql = (messages) => {
  let sql = [];
  for (let i = 0; i < messages.length; i += 1) {
    sql[i] = `INSERT INTO messages (ID, AUTHOR_ID, RECIPIENT_ID, SUBJECT, MESSAGETEXT) VALUES ("${messages[i].id}", "${messages[i].author_id}", "${messages[i].recipient_id}", "${messages[i].subject}", "${messages[i].messageText}");`;
  }
  sql = sql.join('\n');
  return sql;
};
let messages = [];
for (let i = 1; i <= numMessages; i += 1) {
  messages.push(createMessage(i));
}

// users = JSON.stringify(users);

const setup = `DROP DATABASE IF EXISTS YELP;
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
  BUSINESS_ID VARCHAR(100),
  -- BUSINESS ID ASSOCIATED WITH REVIEW,
  STARS INT,
  -- STAR RATING,
  REVIEW_DATE VARCHAR(255),
  -- REVIEW DATE,
  REVIEW_TEXT VARCHAR(3000),
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
  BUSINESS_ID VARCHAR(100),
  -- UNIQUE IDENTIFIER OF ASSOCIATED REVIEW
  USER_ID VARCHAR(255),
  -- UNIQUE IDENTIFIER OF ASSOCIATED USER
  PRIMARY KEY (ID),
  FOREIGN KEY (BUSINESS_ID) 
    REFERENCES businesses(ID),
  FOREIGN KEY (USER_ID) 
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

const data = [setup, users, businesses, reviews, photos, messages].join('\n');
fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.log('error writing content');
  } else {
    console.log('Success writing content!');
  }
});
