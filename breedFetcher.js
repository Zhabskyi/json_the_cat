const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
 
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, res, body) => {
    if (error) {
      callback(error);
    } else {
      if (body.length > 2 && res.statusCode === 200) {
          error = null;
          const data = JSON.parse(body);
          const desc = data[0].description
          callback(null, desc);
        } else if (body.length === 2) {
          callback(error);
          //console.log("Requested breed is not found");
        } else if (res.statusCode === 404) {
          callback(error);
          //console.log("File not found. Code 404");
      }
    }
  });
};

module.exports =  {fetchBreedDescription};