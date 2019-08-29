const fs = require('fs');
const path = require('path');
const request = require('request');
const dbGen = require('../databaseGenerator.js');
const numPhotos = dbGen.numPhotos;
const photoIds = dbGen.photoIds;
const foodPhotoUrl = 'https://loremflickr.com/320/240/breakfast,lunch,dinner';
const userPhotoUrl = 'https://loremflickr.com/320/240/dogs,cats';

var count = 1;
var max = numPhotos;
var download = function(filename, callback) {
  var i = photoIds.indexOf(Number(filename));
  if (i > -1) {
    var url = userPhotoUrl;
  } else {
    var url = foodPhotoUrl;
  }
  request.head({
    url,
    contentType: 'image/jpeg'
  }, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    count++;
    if (count === max + 1) {
      callback = function() {
        console.log(`Done downloading pictures, ${count - 1} total`);
      }
    }
    request(url).pipe(fs.createWriteStream(path.join(__dirname, `/../client/dist/Pictures/${filename}.png`))).on('close', () => { callback(count.toString(), callback)});
  });
};

download(count.toString(), download);
