const fs = require('fs');
const path = require('path');
const request = require('request');
const dbGen = require('../databaseGenerator.js');

const { numPhotos, photoIds } = dbGen;

const foodPhotoUrl = 'https://loremflickr.com/320/240/breakfast,lunch,dinner';
const userPhotoUrl = 'https://loremflickr.com/320/240/dogs,cats';

let count = 1;
const download = (filename, callback) => {
  const i = photoIds.indexOf(Number(filename));
  let url = '';
  if (i > -1) {
    url = userPhotoUrl;
  } else {
    url = foodPhotoUrl;
  }
  request.head({
    url,
    contentType: 'image/jpeg',
  }, (err, res) => {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    count += 1;
    if (count === numPhotos + 1) {
      request(url).pipe(fs.createWriteStream(path.join(__dirname, `/../client/dist/Pictures/${filename}.png`))).on('close', () => {
        console.log(`Done downloading pictures, ${count - 1} total`);
      });
    } else {
      request(url).pipe(fs.createWriteStream(path.join(__dirname, `/../client/dist/Pictures/${filename}.png`))).on('close', () => { callback(count.toString(), callback); });
    }
  });
};

download(count.toString(), download);
