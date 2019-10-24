const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search/?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    throw Error;
  } else if (body.length > 2 && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } else if (body.length === 2) {
    console.log("Requested breed is not found");
  } else if (response.statusCode === 404) {
    console.log("File not found. Code 404");
  }
});